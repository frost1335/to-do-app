require("dotenv").config("./.env");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

app.use("/api", async (req, res, next) => {
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "data", "db.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      }
    );
  }).then((data) => res.json(data));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
