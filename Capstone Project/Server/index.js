const express = require("express");
const cors = require("cors");
const app = express();
const Sequelize = require("./configuration/config");
const authMiddleware = require("./middleware/auth");
const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job");
const employerRoute = require("./routes/employer");
const applicantRoute = require("./routes/applicant");
const applicationRoute = require("./routes/application");
const identityRoute = require("./routes/identity");

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/auth', authRoute);
app.use('/identity', identityRoute);
app.use('/employer', authMiddleware, employerRoute);
app.use('/jobs', authMiddleware, jobRoute);
app.use('/applicant', authMiddleware, applicantRoute);
app.use('/application', authMiddleware, applicationRoute);


Sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(err);
  });

  
app.listen(port, () => {
    console.log("Server running on port " + port);
  });