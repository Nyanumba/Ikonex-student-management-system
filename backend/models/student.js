"use strict";

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    admissionNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.ENUM("Male", "Female"),
      allowNull: false,
    },

    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.ClassStream, {
      foreignKey: "classStreamId",
      as: "classStream",
    });

    Student.hasMany(models.Score, {
      foreignKey: "studentId",
      as: "scores",
    });
  };

  return Student;
};