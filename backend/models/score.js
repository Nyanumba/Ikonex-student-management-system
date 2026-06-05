"use strict";

module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define("Score", {
    examScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },

    catScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },

    totalScore: {
      type: DataTypes.FLOAT,
      allowNull: true, // computed later
    },

    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    term: {
      type: DataTypes.STRING,
      allowNull: false, // e.g. Term 1, Term 2
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