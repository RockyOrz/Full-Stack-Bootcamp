const Sequelize = require("sequelize");
const config = require("./../configuration/config");

const User_session = config.define(
  "user_session",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    session_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    session_expiry_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    session_start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    client_ip_address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
);

module.exports = User_session;