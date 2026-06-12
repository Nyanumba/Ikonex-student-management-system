const express = require("express");
const router = express.Router();

const classStreamController = require("../controllers/classStreamController");

router.post("/", classStreamController.createClassStream);
router.get("/", classStreamController.getAllClassStreams);
router.get("/:id", classStreamController.getClassStreamById);

module.exports = router;