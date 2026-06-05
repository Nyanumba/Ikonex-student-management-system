const express = require("express");
const router = express.Router();

const rankingController = require("../controllers/rankingController");

// GET CLASS RANKING
router.get("/:classStreamId", rankingController.getRanking);

module.exports = router;