const db = require("../models");
const { calculateTotal, calculateGrade } = require("../services/scoreService");

const Score = db.Score;

// CREATE SCORE
exports.createScore = async (req, res) => {
  try {
    const { catScore, examScore } = req.body;

    const total = calculateTotal(catScore, examScore);
    const grade = calculateGrade(total);

    const score = await Score.create({
      ...req.body,
      totalScore: total,
      grade,
    });

    res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL SCORES
exports.getAllScores = async (req, res) => {
  try {
    const scores = await Score.findAll({
      include: ["student", "subject"],
    });

    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};