const modelBeer = require("../model/modelBeer");
const z = require("zod");

const notFound = (res, msg) => {
  res.status(400).json({ message: msg });
};

const createNewBeer = (body) => {
  const name = body.name;
  const desc = body.description;
  let exito = true;
  console.log(`${name} , ${desc}`);

  //Los campos name y description son obligatorios
  if (!name || !desc) {
    exito = false;
  } else {
    exito = modelBeer.createNewBeer(name, desc);
  }
  return exito;
};

const updateBeer = (req, res) => {
  const id = req.body.id;
  const beer = modelBeer.findBeer(id);
  const beerName = req.body.name;
  const beerDesc = req.body.description;
  console.log(`Entre a updateBeer`);

  if (!beer) {
    notFound(res, `Cerveza con ID ${id} no encontrada`);
  } else {
    if (beerName) beer.name = beerName;
    if (beerDesc) beer.description = beerDesc;

    modelBeer.updateBeer(id);
    res.status(201);
  }
};

const deleteBeer = (req, res) => {
  const id = req.body.id;
  const beer = modelBeer.findBeer(id);
  console.log(`Entre a deleteBeer`);

  if (!beer) {
    notFound(res, `Cerveza con ID ${id} no encontrada`);
  } else {
    modelBeer.deleteBeer(id);
    res.status(201);
  }
};

const getBeer = (id) => {
  return modelBeer.findBeer(id);
};

const getRangeBeer = (inicio, fin) => {
  return modelBeer.getRangeBeer(inicio, fin);
};

module.exports = {
  getRangeBeer,
  createNewBeer,
  updateBeer,
  deleteBeer,
  getBeer,
};
