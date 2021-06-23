const express = require('express');

const sequelize = require('./Configuration/config'); // This is a import module
const Employee = require('./models/employee');
const Department = require('./models/department');
const employee_router = require('./routes/employee');
const department_router = require('./routes/department');

app.use(express.urlencoded({ extended: true }));
app.use('/department', department_router);
app.use('/employee', employee_router);

const app = express();
const port = 5000;



Department.hasMany(Employee,{
    foreignKey:{
        // name will be automatically created based on given info
        // name: DepartmentID, 
    },
        onDelete: 'CASCADE',
});

sequelize.authenticate().then(() => {
    console.log('conncetion made');
}).catch((err) => {
    console.log(err);
});

sequelize.sync({force:false}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// console.log('hello');


app.listen(port, () => {
    console.log('listening on port 5000');
});