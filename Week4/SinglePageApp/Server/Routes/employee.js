const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/add_employee', (req, res) => {
    Employee.create({
        DepartmentId: parseInt(req.body.departmentId),
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Salary: parseInt(req.body.salary)
    }).then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});


module.exports = router;