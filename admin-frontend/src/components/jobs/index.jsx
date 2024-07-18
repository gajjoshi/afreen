import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import BACKEND_URL from "@/utils/constants";

const JobsIndex = () => {
  const [jobs, setJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [jobToUpdate, setJobToUpdate] = useState(null); // State to store job being updated
  const [newJob, setNewJob] = useState({
    jobTitle: "",
    industry: "",
    experience: "",
    location: "",
    education: "",
    description: "",
  });
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/jobs`, {
        withCredentials: true,
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleUpdate = (jobId) => {
    const job = jobs.find((job) => job._id === jobId);
    if (job) {
      setJobToUpdate(job);
      setNewJob({
        jobTitle: job.jobTitle,
        industry: job.industry,
        experience: job.experience,
        location: job.location,
        education: job.education,
        description: job.description,
      });
      setShowPopup(true);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/jobs/${jobId}`, {
        withCredentials: true,
      });
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      setJobs(updatedJobs);
      console.log("Job deleted successfully.");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleCreateJob = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setJobToUpdate(null);
    setNewJob({
      jobTitle: "",
      industry: "",
      experience: "",
      location: "",
      education: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (jobToUpdate) {
        // Update existing job
        await axios.put(`${BACKEND_URL}/api/jobs/${jobToUpdate._id}`, newJob, {
          withCredentials: true,
        });
      } else {
        // Create new job
        await axios.post(`${BACKEND_URL}/api/jobs`, newJob, {
          withCredentials: true,
        });
      }
      fetchJobs(); // Refresh jobs list
      handleClosePopup();
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  // const handleJobClick = (jobId) => {
  //   router.push(`/jobs/${jobId}`);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <button
          onClick={handleCreateJob}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Create Job
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            style={{ height: "100%" }} // Ensure equal height for all cards
            // onClick={() => handleJobClick(job._id)}
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4">
              <h2 className="text-lg font-bold mb-2">{job.jobTitle}</h2>
              <p className="text-sm">{job.industry}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700">{job.experience}</p>
              <p className="text-gray-700">{job.location}</p>
              <p className="text-gray-700">{job.education}</p>
              <p className="text-gray-700 mt-4">{job.description}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleUpdate(job._id)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for Update or Create Job */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {jobToUpdate ? "Update Job" : "Create New Job"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={newJob.jobTitle}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={newJob.industry}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={newJob.experience}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newJob.location}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  value={newJob.education}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={newJob.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {jobToUpdate ? "Update Job" : "Create Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsIndex;
