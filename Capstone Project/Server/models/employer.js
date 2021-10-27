const Sequelize = require("sequelize");
const config = require("./../configuration/config");

const Employer = config.define(
  "employer",
  {
    employer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    company_name: {
      type: Sequelize.STRING,
      allowNull: true,
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

module.exports = Employer;
