// routes/jobRoutes.js

const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// GET all jobs
router.get("/", jobController.getAllJobs);

// GET job by ID
router.get("/:id", jobController.getJobById);

// POST a new job
router.post("/", jobController.createJob);

// PUT update a job by ID
router.put("/:id", jobController.updateJob);

// DELETE job by ID
router.delete("/:id", jobController.deleteJob);
router.post("/:id/addCandidate", jobController.addCandidateToJob);
router.get("/:id/fetchcandidates", jobController.fetchCandidatesForJob);
module.exports = router;
