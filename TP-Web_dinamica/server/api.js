const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;
const static = "../static"; // Ver si hay una mejor forma o re-organizar archivos

app.use("/", express.static(path.join(__dirname, static)));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, static, "/index.html"));
});

const beerRouter = require("./routes/beer");

app.use("/beers", beerRouter);

app.get("/*", (req, res) => {
  console.log("404");
  res.status(404).sendFile(path.join(__dirname, static, "./404.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});