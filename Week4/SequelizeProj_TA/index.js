const express = require("express");
const app = express();
const sequelize = require("./Configuration/config");
const Student = require("./Models/Student");
const Department = require("./Models/Department");
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

app.get("/", (req, res) => {
  Task.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/depatment", (req, res) => {
  Department.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// // Using WHERE clause in SQL query
// app.get("/filter", (req, res) => {
//   let data = {
//     where: {
//       gender: req.query.gender,
//       depart_id: req.query.depart_id,
//     },
//     attributes: ["first_name", "last_name", "gender", "depart_id"],
//   };

//   Student.findAll(data)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// Return a studnet by ID
app.get("/:id", (req, res) => {
  Student.findByPk(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post("/", (req, res) => {
  let data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    age: req.body.age,
    gpa: req.body.gpa,
    depart_id: req.body.depart_id,
  };
  Student.create(data)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.patch("/:id", (req, res) => {
  let id = req.params.id;

  Student.findByPk(id)
    .then((result) => {
      result.gpa = req.body.gpa;
      result
        .save()
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/:id", (req, res) => {
  let id = req.params.id;

  Student.findByPk(id)
    .then((result) => {
      result
        .destroy()
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
