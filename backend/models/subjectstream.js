"use strict";

module.exports = (sequelize, DataTypes) => {
  const SubjectStream = sequelize.define("SubjectStream", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  SubjectStream.associate = (models) => {
    // no extra associations needed
  };

  return SubjectStream;
};