const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const classStreamRoutes = require("./routes/classStreamRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const rankingRoutes = require("./routes/rankingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/class-streams", classStreamRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/rankings", rankingRoutes);

app.get("/", (req, res) => {
  res.send("Ikonex Student Management API Running");
});

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});