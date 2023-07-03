const express = require("express");
const path = require("path");
const router = express.Router();

// REGEX
// ^ => at the begining only
// $ => at the end only
// | => OR for regex

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
