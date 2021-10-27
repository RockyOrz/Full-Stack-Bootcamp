const express = require("express");
const router = express.Router();
const Application = require("../models/application");
const { Op } = require("sequelize");


router.get("/employer/:id", (req, res) => {
  let data = {
    where: { employer_id: req.params.id },
  };
  Application.findAll(data)
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:job_id/:applicant_id", (req, res) => {
  let data = {
    where: {
      [Op.and]: [
        { job_id: req.params.job_id },
        { applicant_id: req.params.applicant_id },
      ],
    },
  };
  Application.findOne(data)
    .then((job) => {
      job ? res.status(200).send(job) : res.sendStatus(404);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/",  (req, res) => {
  let data = {
    job_id: req.body.job_id,
    applicant_id: req.body.applicant_id,
    employer_id: req.body.employer_id,
  };
  Application.create(data)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
