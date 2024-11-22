const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 9000;

app.use(cors());
app.use(express.json());

// Para utilizar archivos estaticos
app.use("/static", express.static(path.join(__dirname, "public/static")));

// Ruta para /index
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

// Ruta para /beers
app.get("/beers", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/beers.html"));
});

// Ruta para /haircuts
app.get("/haircuts", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/haircuts.html"));
})

// Página de recurso no existente
app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/html/404.html"));
});

// API cervezas
app.use("/api/beers", require("./routes/api/beers"));

//app.use("/", express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
