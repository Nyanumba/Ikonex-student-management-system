'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      examScore: {
        type: Sequelize.FLOAT
      },
      catScore: {
        type: Sequelize.FLOAT
      },
      totalScore: {
        type: Sequelize.FLOAT
      },
      grade: {
        type: Sequelize.STRING
      },
      term: {
        type: Sequelize.STRING
      },
      academicYear: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      subjectId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores');
  }
};