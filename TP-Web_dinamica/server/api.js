const express = require("express");
const app = express();
const port = 9000;
const path = require("path");

app.use("/", express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile("404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
