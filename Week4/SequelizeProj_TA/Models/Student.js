const Sequelize = require('sequelize');
const config = require('./../Configuration/config');

const Student = config.define('student', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gpa: {
        type: Sequelize.DOUBLE,
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


module.exports = Student;