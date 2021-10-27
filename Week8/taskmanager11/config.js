const Sequelize = require("sequelize");
const environment = process.env.NODE_ENV || "development";

let database = "";
let username = "rocky"; 
let password = "rocky";
let host = "localhost";
let dialect = "mysql";

if (environment == "production") {
  database = "ob2oo9ql7kgrz9ue";
  username = "i4ev2a092x32pluz";
  password = "c2qz3oj2edkom9hd";
  host = "ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
}

const config = new Sequelize(database, username, password, { host, dialect });

module.exports = config;
