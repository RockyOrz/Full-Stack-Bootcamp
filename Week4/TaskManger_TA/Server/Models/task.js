const Sequelize = require('sequelize');
const config = require('./../Configuration/config');

const Task = config.define('task', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority_level: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    progress_level: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {timestamps: false} );

module.exports = Task;