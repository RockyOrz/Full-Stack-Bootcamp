const Sequelize = require('sequelize');
const config = require('./../Configuration/config');

const Department = config.define('department', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, 
// exclude createAt and updateAt columns
{timestamps: false}

);


module.exports = Department;