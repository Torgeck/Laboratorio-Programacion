const express = require('express')
const app=express();
const port=9000;

app.use(express.static("./../static/"));

app.get('/', (req, res) => {
  //app.use(express.static("./../static/index.html"));
  res.sendFile("index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})