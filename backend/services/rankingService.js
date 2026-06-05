const db = require("../models");

const Student = db.Student;
const Score = db.Score;

// 🔥 Get class ranking
exports.getClassRanking = async (classStreamId) => {
  // 1. Get all students in class
  const students = await Student.findAll({
    where: { classStreamId },
    include: [
      {
        model: Score,
        as: "scores",
      },
    ],
  });

  // 2. Calculate total per student
  const ranked = students.map((student) => {
    const total = student.scores.reduce((sum, score) => {
      return sum + (score.totalScore || 0);
    }, 0);

    return {
      id: student.id,
      name: student.firstName + " " + student.lastName,
      admissionNumber: student.admissionNumber,
      total,
    };
  });

  // 3. Sort descending
  ranked.sort((a, b) => b.total - a.total);

  // 4. Assign positions
  return ranked.map((student, index) => ({
    ...student,
    position: index + 1,
  }));
};