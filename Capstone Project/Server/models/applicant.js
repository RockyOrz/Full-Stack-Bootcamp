const Sequelize = require("sequelize");
const config = require("./../configuration/config");

const Applicant = config.define(
  "applicant",
  {
    applicant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    highest_educational_level: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    educational_insititute: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    professional_field: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    years_professional_exprience: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    resume: {
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

module.exports = Applicant;
