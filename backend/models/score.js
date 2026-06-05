"use strict";

module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define("Score", {
    catScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { min: 0, max: 100 },
    },

    examScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { min: 0, max: 100 },
    },

    totalScore: {
      type: DataTypes.FLOAT,
    },

    grade: {
      type: DataTypes.STRING,
    },

    term: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    academicYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Score.associate = (models) => {
    Score.belongsTo(models.Student, {
      foreignKey: "studentId",
      as: "student",
    });

    Score.belongsTo(models.Subject, {
      foreignKey: "subjectId",
      as: "subject",
    });
  };

  return Score;
};