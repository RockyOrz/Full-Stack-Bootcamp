const Sequelize = require('sequelize');

const database = "company";
const username = "rocky";
const password = "rocky";
const options = {dialect: 'mysql'};

const sequelize = new Sequelize(database, username, password, options);

module.exports = sequelize;