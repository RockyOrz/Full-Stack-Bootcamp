const express = require("express");
const app = express();
const Sequelize = require("./Configuration/config");
const { Op } = require("sequelize");
const Department = require("./Model/department");
const Employee = require("./Model/employee");

const port = 3000;

app.use(express.urlencoded({ extended: false }));

Sequelize.authenticate()
    .then(() => {
        console.log("Database connection established");
    })
    .catch((err) => {
        console.error(err);
    });

app.get("/employee", (req, res) => {
    Employee.findAll()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.get("/employee/:id", (req, res) => {
    Employee.findByPk(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.get("/department", (req, res) => {
    Department.findAll()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.get("/filter", (req, res) => {
    let data = {
        where: {},
        attributes: ["name", "gender", "department_id"],
    };

    if (req.query.gender) {
        data.where.gender = req.query.gender;
    }

    if (req.query.department_id) {
        data.where.department_id = req.query.department_id;
    }

    Employee.findAll(data)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.post("/employee", (req, res) => {
    let data = {
        name: req.body.name,
        gender: req.body.gender,
        salary: req.body.salary,
        department_id: req.body.department_id,
    };
    Employee.create(data)
        .then(() => {
            res.redirect("/employee");
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.put("/employee/:id", (req, res) => {
    Employee.findOne({ where: { id: req.params.id } })
        .then((result) => {
            if (result) {
                result
                    .update({
                        name: req.body.name,
                        gender: req.body.gender,
                        salary: req.body.salary,
                        department_id: req.body.department_id,
                    })
                    .then(() => {
                        res.redirect("/employee");
                    })
                    .catch((err) => {
                        res.status(400).send(err);
                    });
            } else {
                res.status(404).send("Employee Not found");
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.delete("/employee/:id", (req, res) => {
    Employee.destroy({
        where: { id: req.params.id },
    })
        .then(() => {
            res.redirect("/employee");
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
