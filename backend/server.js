const express = require("express");
const db = require("./models");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Management System API");
});

const PORT = process.env.PORT || 5000;

db.sequelize.authenticate()
  .then(() => {
    console.log("Database connected");

    return db.sequelize.sync();
  })
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Error:", err);
  });