const Department = require('../models/department');
const router = require('express').Router();

router.post('/add_department', (req, res) => {
    Department.create({
        name: req.body.name
    }).then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});

module.exports = router;