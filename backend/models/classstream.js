"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClassStream = sequelize.define("ClassStream", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    academicYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  ClassStream.associate = (models) => {
    ClassStream.hasMany(models.Student, {
      foreignKey: "classStreamId",
      as: "students",
      onDelete: "SET NULL",
    });

    ClassStream.belongsToMany(models.Subject, {
      through: models.SubjectStream,
      foreignKey: "classStreamId",
      otherKey: "subjectId",
      as: "subjects",
    });
  };

  return ClassStream;
};