const rankingService = require("../services/rankingService");

// GET CLASS RANKING
exports.getRanking = async (req, res) => {
  try {
    const { classStreamId } = req.params;

    const ranking = await rankingService.getClassRanking(classStreamId);

    res.json({
      classStreamId,
      ranking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};