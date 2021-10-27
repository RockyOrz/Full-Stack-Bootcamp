const express = require('express');
const Task = require("./Models/task");
const sequelize = require('./config')
const app = express();

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

app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on port 3000')
})
