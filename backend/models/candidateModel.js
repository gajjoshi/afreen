const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  positionAppliedFor: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  passportNumber: { type: String, required: true },
  pinCode: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  skills: { type: String, required: true },
  cvUrl: { type: String, required: true }, // Store document file names or URLs
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" }, // Reference to Job model
});

module.exports = mongoose.model("Candidate", candidateSchema);
