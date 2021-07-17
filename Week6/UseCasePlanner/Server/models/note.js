const Sequelize = require('sequelize');
const config = require('./../config/config');

const Note = config.define('note', {
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
    header:{
        type: Sequelize.STRING,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING,
        allowNull: false
    },
    importance: {
        type: Sequelize.ENUM('low','medium','high'),
        allowNull: false
    }
}, 
// exclude createAt and updateAt columns
{timestamps: false}

);


module.exports = Note;