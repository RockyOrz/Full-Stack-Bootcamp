const sequelize = require('../config'); // This is a import module
const Sequelize = require('sequelize'); // This is a library

const Employee = sequelize.define('Employee', {
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FirstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    LastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Salary:{
        type: Sequelize.DECIMAL,
        allowNull: false
    }
},

{freezeTableName: true});

module.exports = Employee;