const Sequelize = require("sequelize");
const config = require("./../configuration/config");

const Application = config.define(
  "application",
  {
    application_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    applicant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    job_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    employer_id: {
      type: Sequelize.INTEGER,
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

module.exports = Application;
