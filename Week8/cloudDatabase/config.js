const Sequelize = require('sequelize');

const database = "ob2oo9ql7kgrz9ue";
const username = "i4ev2a092x32pluz";
const password = "c2qz3oj2edkom9hd";
const host = "ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
const dialect = "mysql";

const config = new Sequelize(database, username, password, {host, dialect});

module.exports = config;