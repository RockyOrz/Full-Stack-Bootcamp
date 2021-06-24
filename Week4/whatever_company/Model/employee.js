const Sequelize = require('sequelize');
const config = require('./../Configuration/config');

const Employee = config.define('employee', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, 
// exclude createAt and updateAt columns
{timestamps: false}

);

module.exports = Employee;