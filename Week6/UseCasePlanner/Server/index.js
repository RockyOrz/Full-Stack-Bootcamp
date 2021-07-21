const { Op } = require("sequelize");

const express = require("express");
const app = express();
const sequelize = require("./config/config");
const Task = require("./models/task");
const Note = require("./models/note");
const cors = require("cors");

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/task", (req, res) => {
  Task.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/note", (req, res) => {
  Note.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/completedTasks", (req, res) => {
  Task.findAll({ where: { status: "completed" } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/toDoTasks", (req, res) => {
  Task.findAll({
    where: {
      [Op.or]: [{ status: "pending" }, { status: "started" }],
    },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
