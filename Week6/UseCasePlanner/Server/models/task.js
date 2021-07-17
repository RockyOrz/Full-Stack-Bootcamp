const Sequelize = require('sequelize');
const config = require('./../config/config');

const Task = config.define('task', {
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
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_start: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_of_end: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('pending', 'started', 'completed'),
        allowNull: false
    }
}, 
// exclude createAt and updateAt columns
{timestamps: false}

);


module.exports = Task;