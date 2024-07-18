import React, { useState, useEffect } from "react";
import axios from "axios";

const SubmitCVForm = () => {
  const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
    fullName: "",
    email: "",
    experience: "",
    positionAppliedFor: "",
    dateOfBirth: "",
    contactNumber: "",
    address: "",
    passportNumber: "",
    pinCode: "",
    city: "",
    country: "",
    state: "",
    skills: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedJobId, setSelectedJobId] = useState(
    localStorage.getItem("selectedJobId") || null
  );

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("selectedJobId", selectedJobId);
  }, [selectedJobId]);

  useEffect(() => {
    if (selectedJobId) {
      fetchJobDetails(selectedJobId);
    }
  }, [selectedJobId]);

  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/jobs/${jobId}`
      );
      setJobDetails(response.data); // Assuming response.data contains job details
    } catch (error) {
      console.error("Error fetching job details:", error);
      setJobDetails(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePdfChange = (e) => {
    setSelectedPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("positionAppliedFor", formData.positionAppliedFor);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("contactNumber", formData.contactNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("passportNumber", formData.passportNumber);
    formDataToSend.append("pinCode", formData.pinCode);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("skills", formData.skills);

    if (selectedJobId) {
      formDataToSend.append("jobId", selectedJobId);
    }

    if (jobDetails) {
      console.log("Job Details:", jobDetails); // Debugging statement
      formDataToSend.append("jobTitle", jobDetails.jobTitle);
      formDataToSend.append("industry", jobDetails.industry);
      formDataToSend.append("experienceRequired", jobDetails.experience);
      formDataToSend.append("location", jobDetails.location);
      formDataToSend.append("education", jobDetails.education);
      formDataToSend.append("jobDescription", jobDetails.description);
    }

    if (selectedPdf) {
      formDataToSend.append("resumePdf", selectedPdf);
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/api/candidates/submitForm",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Form submitted successfully!");

        if (selectedJobId) {
          const candidateId = response.data.data._id; // Assuming response contains candidate ID
          await axios.post(
            `http://localhost:3002/api/jobs/${selectedJobId}/addCandidate`,
            { candidateId },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          alert("Candidate associated with the selected job!");
          setSelectedJobId(null); // Clear selectedJobId after association
        }

        setFormData({
          fullName: "",
          email: "",
          experience: "",
          positionAppliedFor: "",
          dateOfBirth: "",
          contactNumber: "",
          address: "",
          passportNumber: "",
          pinCode: "",
          city: "",
          country: "",
          state: "",
          skills: "",
        });
        setSelectedPdf(null);
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="max-w-[1245px] w-full mx-auto bg-white py-8 px-6 sm:px-10 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl text-black font-bold mb-6">Submit your CV</h2>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4"
        onSubmit={handleSubmit}
      >
        {/* Input fields */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience in years"
          value={formData.experience}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="positionAppliedFor"
          placeholder="Position Applied For"
          value={formData.positionAppliedFor}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 col-span-1 sm:col-span-2"
        />
        <input
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          value={formData.passportNumber}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          value={formData.pinCode}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 col-span-1 sm:col-span-2"
        />
        <input
          type="file"
          name="resumePdf"
          onChange={handlePdfChange}
          className="p-3 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600 col-span-1 sm:col-span-2"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 col-span-1 sm:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitCVForm;
