const express = require("express");
const router = express.Router();
const Job = require("../models/job");

router.get("/", (req, res) => {
  Job.findAll()
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
  let search = {
    where: { job_id: req.params.id },
  };
  Job.findAll(search)
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/employer/:id", (req, res) => {
  let search = {
    where: { employer_id: req.params.id },
  };
  Job.findAll(search)
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:location", (req, res) => {
  let location = req.params.location;

  Job.findAll({ where: { location } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  let job_id = req.params.id;

  Job.destroy({ where: { job_id } })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  let job_id = req.params.id;

  let job_detail = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    company_name: req.body.company_name,
  };

  Job.update(job_detail, { where: { job_id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
  let job = {
    employer_id: req.body.employer_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    company_name: req.body.company_name,
  };
  Job.create(job)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
