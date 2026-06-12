const db = require("../models");

const Subject = db.Subject;

exports.createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    await subject.update(req.body);

    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    await subject.destroy();

    res.json({
      message: "Subject deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};