const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadOnCloudinary(fileLocalPath) {
  try {
    if (!fileLocalPath) return null;

    const result = await cloudinary.uploader.upload(fileLocalPath, {
      resource_type: "raw", // Use raw for non-image files like PDFs
      upload_preset: "ml_default", // Your configured upload preset
    });

    // Remove the local file after upload
    fs.unlinkSync(fileLocalPath);
    return result;
  } catch (error) {
    // Remove the local file even if there was an error
    fs.unlinkSync(fileLocalPath);
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  }
}

module.exports = uploadOnCloudinary;
