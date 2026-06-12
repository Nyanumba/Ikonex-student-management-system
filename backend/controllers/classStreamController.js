const db = require("../models");

const ClassStream = db.ClassStream;

exports.createClassStream = async (req, res) => {
  try {
    const stream = await ClassStream.create(req.body);
    res.status(201).json(stream);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllClassStreams = async (req, res) => {
  try {
    const streams = await ClassStream.findAll();
    res.json(streams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClassStreamById = async (req, res) => {
  try {
    const stream = await ClassStream.findByPk(req.params.id);

    if (!stream) {
      return res.status(404).json({
        message: "Class stream not found",
      });
    }

    res.json(stream);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};