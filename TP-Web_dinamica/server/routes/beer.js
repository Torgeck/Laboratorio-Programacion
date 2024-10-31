const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("../../static/pages/beers/beers.html");
});

router.get("/new", (req, res) => {
  res.send("Beer new FORM");
});

module.exports = router;
