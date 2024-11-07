const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/beers", require("./routes/api/beers"));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/html/404.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
