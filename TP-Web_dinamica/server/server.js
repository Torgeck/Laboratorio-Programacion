const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api/beers", require("./routes/api/beers"));

//Sobraría con el uso del use de la línea 8?
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

//Página de recurso no existente
app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/html/404.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
