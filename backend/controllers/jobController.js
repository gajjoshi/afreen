// controllers/jobController.js

const mongoose = require("mongoose");
const Job = require("../models/jobModel");
const Candidate = require("../models/candidateModel");
// GET all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new job
exports.createJob = async (req, res) => {
  const { jobTitle, industry, experience, location, education, description } =
    req.body;

  // Validation
  if (
    !jobTitle ||
    !industry ||
    !experience ||
    !location ||
    !education ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newJob = new Job({
    jobTitle,
    industry,
    experience,
    location,
    education,
    description,
  });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update a job by ID
exports.updateJob = async (req, res) => {
  const { jobTitle, industry, experience, location, education, description } =
    req.body;

  // Validation
  if (
    !jobTitle ||
    !industry ||
    !experience ||
    !location ||
    !education ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { jobTitle, industry, experience, location, education, description },
      { new: true }
    );
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE job by ID
exports.deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addCandidateToJob = async (req, res) => {
  const jobId = req.params.id;
  console.log(jobId);
  const { candidateId } = req.body;

  try {
    // Find job by ID and update candidates array
    const job = await Job.findByIdAndUpdate(
      jobId,
      { $push: { candidates: candidateId } },
      { new: true }
    );

    // Check if job exists
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Find candidate by ID
    const candidate = await Candidate.findById(candidateId);

    // Check if candidate exists
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Respond with success message and updated job object
    res
      .status(200)
      .json({ message: "Candidate added to job successfully", job });
  } catch (error) {
    console.error("Error adding candidate to job:", error);
    res.status(500).json({ message: "Failed to add candidate to job" });
  }
};
exports.fetchCandidatesForJob = async (req, res) => {
  const jobId = req.params.id;

  try {
    // Find job by ID and populate candidates
    const job = await Job.findById(jobId).populate("candidates");

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Extract populated candidates
    const candidates = job.candidates;

    res.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates for job:", error);
    res.status(500).json({ message: "Failed to fetch candidates for job" });
  }
};
