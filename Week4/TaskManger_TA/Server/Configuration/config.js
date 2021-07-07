const Sequelize = require('sequelize');

const username = 'rocky';
const password = 'rocky';
const database = 'TasksManager';
const options = { dialect: 'mysql' };

const config = new Sequelize(database, username, password, options);

module.exports = config;