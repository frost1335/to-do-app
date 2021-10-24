const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = Router();

router.post("/api", async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "..", "data", "db.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      }
    );
  }).then((data) => data);
  res.status(200).json({ data });
});

module.exports = router;
