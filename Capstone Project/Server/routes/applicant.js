const express = require("express");
const multer = require("multer");
const router = express.Router();
const Applicant = require("../models/applicant");
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/resume");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("resume");


router.get("/:id", (req, res) => {
  let search = {
    where: { applicant_id: req.params.id },
  };
  Applicant.findOne(search)
    .then((applicant) => {
      res.status(200).send(applicant);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/download/:name", (req, res) => {
  const file = path.join(__dirname, `../public/resume/${req.params.name}`);
  res.sendFile(file);
});


router.post("/", (req, res) => {
  let data = {
    applicant_id: req.body.applicant_id,
  };
  Applicant.create(data)
    .then((applicant) => {
      res.status(200).send(applicant);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/update/:id", upload, (req, res) => {
  let data = {
    highest_educational_level: req.body.highest_educational_level,
    educational_insititute: req.body.educational_insititute,
    professional_field: req.body.professional_field,
    years_professional_exprience: req.body.years_professional_exprience,
    resume: req.file ? req.file.filename : null,
  };
  Applicant.update(data, { where: { applicant_id: req.params.id } })
    .then((applicant) => {
      res.status(200).send(applicant);
    })
    .catch((err) => {
      console.log("500 error");
      res.status(500).send(err);
    });
});

module.exports = router;
