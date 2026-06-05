const express = require("express");
const router = express.Router();

const scoreController = require("../controllers/scoreController");

// CREATE SCORE
router.post("/", scoreController.createScore);

// GET ALL SCORES
router.get("/", scoreController.getAllScores);

module.exports = router;