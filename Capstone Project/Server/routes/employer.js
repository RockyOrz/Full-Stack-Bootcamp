const express = require("express");
const router = express.Router();
const Employer = require("../models/employer");


router.get("/:id", (req, res) => {
  let data = {
    where: {employer_id: req.params.id}
  };
  Employer.findOne(data)
    .then((employer) => {
      res.status(200).send(employer);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.post("/", (req, res) => {
  let data = {
    employer_id: req.body.employer_id,
    position: req.body.position,
    company_name: req.body.company_name,
  };
  Employer.create(data)
    .then((employer) => {
      res.status(200).send(employer);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
