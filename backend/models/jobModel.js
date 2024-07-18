const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  industry: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  education: { type: String, required: true },
  description: { type: String, required: true },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Candidate" }], // Array to store candidate ObjectIds
});

module.exports = mongoose.model("Job", jobSchema);
