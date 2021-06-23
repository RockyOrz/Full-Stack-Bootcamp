const sequelize = require('../config'); // This is a import module
const Sequelize = require('sequelize'); // This is a library

const Department = sequelize.define('Department', {
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Title:{
        type: Sequelize.STRING,
        allowNull: false
    }
},

{freezeTableName: true});

module.exports = Department;