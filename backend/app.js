const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const app = express();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Middleware
const corsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3003",
    "http://localhost:3000",
    "https://afreen-psi.vercel.app",
    "https://afreen-admin.vercel.app",
  ], // Replace with your frontend's origin
  credentials: true,
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/candidates", candidateRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post(
  "/api/candidates/submitForm",
  upload.single("resumePdf"),
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        experience,
        positionAppliedFor,
        dateOfBirth,
        contactNumber,
        address,
        passportNumber,
        pinCode,
        city,
        country,
        state,
        skills,
        jobId, // Assuming jobId is passed from frontend
        jobTitle,
        industry,
        experienceRequired,
        location,
        education,
        jobDescription,
      } = req.body;
      const resumePdf = req.file;

      // Nodemailer setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: "admin@afreenintl.in", // Replace with your recipient email
        subject: "New CV Submission",
        html: `
          <h3>Candidate Details:</h3>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Experience:</strong> ${experience} years</li>
            <li><strong>Position Applied For:</strong> ${positionAppliedFor}</li>
            <li><strong>Date of Birth:</strong> ${dateOfBirth}</li>
            <li><strong>Contact Number:</strong> ${contactNumber}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Passport Number:</strong> ${passportNumber}</li>
            <li><strong>Pin Code:</strong> ${pinCode}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>State:</strong> ${state}</li>
            <li><strong>Skills:</strong> ${skills}</li>
          </ul>
          ${
            jobId
              ? `
          <h3>Job Details:</h3>
          <ul>
            <li><strong>Job Title:</strong> ${jobTitle}</li>
            <li><strong>Industry:</strong> ${industry}</li>
            <li><strong>Experience Required:</strong> ${experienceRequired}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Education:</strong> ${education}</li>
            <li><strong>Job Description:</strong> ${jobDescription}</li>
          </ul>`
              : ""
          }
        `,
        attachments: [
          {
            filename: resumePdf.originalname,
            path: resumePdf.path,
          },
        ],
      };

      await transporter.sendMail(mailOptions);

      // Delete the file after sending email
      fs.unlinkSync(resumePdf.path);

      res.status(201).send({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res
        .status(500)
        .send({ message: "An error occurred while submitting the form" });
    }
  }
);

// New route for customer support submissions
app.post("/api/support/submitSupportForm", async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: "bhuvanjain212003@gmail.com", // Replace with your recipient email
      subject: "New Support Message",
      html: `
        <h3>Customer Support Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send({ message: "Support form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting support form:", error);
    res
      .status(500)
      .send({ message: "An error occurred while submitting the support form" });
  }
});

app.use("/api/jobs", jobRoutes);

module.exports = app;
