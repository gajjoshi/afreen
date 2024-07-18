const Candidate = require("../models/candidateModel");
const cloudinary = require("../services/cloudinaryService");
const uploadOnCloudinary = require("../utils/cloudinary");

const addCandidate = async (req, res) => {
  try {
    // Upload CV to Cloudinary
    console.log(req, "req of addCandidate");
    console.log(req.files?.resumePdf[0]);
    if (!req.files) {
      return res.status(400).json({ message: "CV file is required" });
    }

    // const result = await cloudinary.uploader.upload(req.file.path, {
    //   folder: "cv_documents",
    //   resource_type: "auto",
    // });

    // Create new candidate with Cloudinary URL
    const newCandidate = new Candidate({
      fullName: req.body.fullName,
      email: req.body.email,
      experience: req.body.experience,
      positionAppliedFor: req.body.positionAppliedFor,
      dateOfBirth: req.body.dateOfBirth,
      contactNumber: req.body.contactNumber,
      address: req.body.address,
      passportNumber: req.body.passportNumber,
      pinCode: req.body.pinCode,
      city: req.body.city,
      country: req.body.country,
      state: req.body.state,
      skills: req.body.skills,
      // cvUrl: result.secure_url, // Store Cloudinary URL for CV
    });

    const avatarLocalPath = req.files?.resumePdf[0]?.path;
    if (avatarLocalPath) {
      const avatar = await uploadOnCloudinary(avatarLocalPath);
      if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
      }
      console.log(avatar.url, "avatar.url");

      newCandidate.cvUrl = avatar.url;
    }

    // Save candidate to MongoDB
    await newCandidate.save();

    // Return response
    res.status(201).json({
      message: "Candidate added successfully",
      data: newCandidate,
    });
  } catch (error) {
    console.error("Error adding candidate:", error);
    res.status(500).json({ message: "Failed to add candidate" });
  }
};

module.exports = { addCandidate };
