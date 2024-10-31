const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/", express.static("public"));

router.get("/", (req, res) => {
  res.sendFile("/html/beers");
});

router.get("/new", (req, res) => {
  res.send("Beer new FORM");
});

module.exports = router;
