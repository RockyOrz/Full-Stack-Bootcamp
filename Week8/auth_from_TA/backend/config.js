let database = 'robogarden_app';
let username = 'root';
let password = '';
let host = 'localhost';

const Sequelize = require('sequelize');
const config =  new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});

module.exports = config;