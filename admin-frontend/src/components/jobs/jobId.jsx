import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import BACKEND_URL from "@/utils/constants";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const router = useRouter();
  const id = router.query.jobId; // Extract job id from router query

  useEffect(() => {
    if (id) {
      fetchJobDetails(id);
      fetchCandidates(id);
    }
  }, [id]);

  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/jobs/${jobId}`, {
        withCredentials: true,
      });
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const fetchCandidates = async (jobId) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/jobs/${jobId}/fetchcandidates`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  if (!job) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{job.jobTitle} Candidates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {candidates.map((candidate) => (
          <div
            key={candidate._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4">
              <h2 className="text-lg font-bold mb-2">{candidate.fullName}</h2>
              <p className="text-sm">{candidate.positionAppliedFor}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700">{candidate.experience}</p>
              <p className="text-gray-700">
                {candidate.address}, {candidate.city}, {candidate.country}
              </p>
              <p className="text-gray-700 mt-4">{candidate.skills}</p>
              <div className="mt-4">
                <a
                  href={candidate.cvUrl} // Assuming documents[0] is the Cloudinary URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
