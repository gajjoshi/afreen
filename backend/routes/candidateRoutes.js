const express = require("express");
const { addCandidate } = require("../controllers/candidateController");
const { upload } = require("../config/multerConfig");
const router = express.Router();

router.post(
  "/addCandidate",
  upload.fields([{ name: "resumePdf", maxCount: 1 }]),
  addCandidate
);

module.exports = router;
