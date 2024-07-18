import { useState, useEffect } from "react";
import SubmitCVForm from "./submitCVForm";
import axios from "axios";
import BACKEND_URL from "@/utils/constants";

const JobListing = ({
  jobTitle,
  industry,
  experience,
  location,
  education,
  jobId,
  onSelectJob,
}) => {
  const handleApplyNow = () => {
    localStorage.setItem("selectedJobId", jobId); // Store jobId in localStorage
    onSelectJob("submit-cv"); // Switch tab to "submit-cv"
  };

  return (
    <div className="border w-full flex flex-col p-4 text-black rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold">{jobTitle}</h2>
      <p className="text-gray-600">{industry}</p>
      <div className="flex flex-wrap mt-2">
        <span className="flex items-center justify-center bg-gray-200 text-center rounded-full text-sm px-2 py-1 mx-1 my-1">
          {experience}
        </span>
        <span className="bg-gray-200 rounded-full text-sm px-2 py-1 mx-1 my-1">
          {location}
        </span>
        <span className="bg-gray-200 rounded-full text-sm px-2 py-1 mx-1 my-1">
          {education}
        </span>
      </div>
      <p className="mt-2">
        Exercises operational responsibility for a complete production line in
        accordance with operating procedures and approved safety procedures to
        ensure continuous and efficient operations and the meeting of line
        production targets. Monitors system.
      </p>
      <button
        className="mt-4 w-full sm:w-fit bg-[#21A08B] text-white px-4 py-2 rounded-lg"
        onClick={handleApplyNow}
      >
        Apply Now
      </button>
    </div>
  );
};

const Candidate = () => {
  const [tab, setTab] = useState("openings");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from backend API
    axios
      .get(`${BACKEND_URL}/api/jobs`)
      .then((response) => {
        setJobs(response.data); // Assuming response.data is an array of job objects
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const handleTabChange = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="min-h-screen max-w-[1245px] w-full mx-auto flex flex-col items-center bg-white py-6 px-4 sm:px-6">
      <div className="w-full py-6 rounded-lg">
        <nav className="flex w-full sm:w-fit rounded-xl border-2 px-5 pt-3 border-black border-opacity-25 justify-center space-x-8 mb-6">
          <button
            onClick={() => handleTabChange("openings")}
            className={`pb-2 text-black font-bold ${
              tab === "openings" ? "border-b-2 border-black " : "text-gray-600"
            }`}
          >
            Openings
          </button>
          <button
            onClick={() => handleTabChange("submit-cv")}
            className={`pb-2 text-black font-bold ${
              tab === "submit-cv" ? "border-b-2 border-black " : "text-gray-600"
            }`}
          >
            Submit your CV
          </button>
        </nav>

        {tab === "openings" ? (
          <div className="w-full">
            {jobs.map((job) => (
              <JobListing
                key={job._id} // Assuming _id is the ObjectId from MongoDB
                jobTitle={job.jobTitle}
                industry={job.industry}
                experience={job.experience}
                location={job.location}
                education={job.education}
                onSelectJob={handleTabChange} // Pass onSelectJob function
                jobId={job._id} // Pass jobId
              />
            ))}
          </div>
        ) : (
          <SubmitCVForm />
        )}
      </div>
    </div>
  );
};

export default Candidate;
