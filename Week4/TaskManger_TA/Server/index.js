const express = require("express");
const app = express();
const sequelize = require("./Configuration/config");
const Task = require("./Models/task");
const cors = require("cors");

const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get("/filter", (req, res) => {
  Task.findAll({ where: { progress_level: req.query.progress_level } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post("/", (req, res) => {
  let task = req.body;

  Task.create(task)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log("Server running on port " + port);
});
