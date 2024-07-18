const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Job = require("./models/jobModel");
const app = require("./app");
const port = process.env.PORT || 3001;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const importJobs = async () => {
  try {
    // Read jobs data from JSON file
    const jobsData = JSON.parse(
      fs.readFileSync(
        "/Users/bhuvanjain02/Desktop/Afreen/backend/data/job.json",
        "utf-8"
      )
    );

    // Insert jobs data into MongoDB
    await Job.insertMany(jobsData);

    console.log("Data imported successfully!");
    process.exit(); // Exit process after importing data
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1); // Exit process with failure
  }
};

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsInsecure: true,
  })
  .then((con) => {
    // console.log(con.connection);
    // importJobs();
    console.log("Sucess connected to db");
  });
app.listen(port, () => {
  console.log(`u r in ${port}`);
});
