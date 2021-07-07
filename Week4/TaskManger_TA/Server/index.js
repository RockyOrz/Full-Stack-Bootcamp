const express = require("express");
const app = express();
const sequelize = require("./Configuration/config");
const Task = require("./Models/task");
const cors = require("cors");

const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  Task.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
