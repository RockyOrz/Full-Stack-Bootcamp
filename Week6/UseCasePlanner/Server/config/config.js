const Sequelize = require('sequelize');

const username = 'rocky';
const password = 'rocky';
const database = 'taskplanner_dev';
const options = { dialect: 'mysql' };

const config = new Sequelize(database, username, password, options);

module.exports = config;