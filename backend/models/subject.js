"use strict";

module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // e.g. MATH101
    },
  });

  Subject.associate = (models) => {
    Subject.belongsToMany(models.ClassStream, {
      through: models.SubjectStream,
      foreignKey: "subjectId",
      otherKey: "classStreamId",
      as: "classStreams",
    });

    Subject.hasMany(models.Score, {
      foreignKey: "subjectId",
      as: "scores",
    });
  };

  return Subject;
};