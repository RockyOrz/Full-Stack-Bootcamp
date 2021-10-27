const express = require("express");
const router = express.Router();
const Employer = require("../models/employer");
const Applicant = require("../models/applicant");

router.get("/applicant/:id", (req, res) => {
  let data = {
    where: { applicant_id: req.params.id },
  };
  Applicant.findOne(data)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.get("/employer/:id", (req, res) => {
  let data = {
    where: { employer_id: req.params.id },
  };
  Employer.findOne(data)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/applicant", (req, res) => {
  let data = {
    applicant_id: req.body.applicant_id,
  };
  Applicant.create(data)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/employer", (req, res) => {
  let data = {
    employer_id: req.body.employer_id ,
  };
  Employer.create(data)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
