const modelBeer = require("../model/modelBeer");

const notFound = (res, msg) => {
  res.status(400).json({ message: msg });
};

 getAllBeers = (req, res) => {
  res.json(modelBeer.data);
};

const createNewBeer = (body) => {
  const name = body.name;
  const desc = body.description;
  let exito=true;
  //Los campos name y description son obligatorios
  if (!name || !desc) {
    exito=false;
  } else {
    exito= modelBeer.createNewBeer(name, desc);
  }
  return exito;
};

const updateBeer = (req, res) => {
  const id = req.body.id;
  const beer = modelBeer.findBeer(req.body.id);
  const beerName = req.body.name;
  const beerDesc = req.body.description;

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

  if (!beer) {
    notFound(res, `Cerveza con ID ${id} no encontrada`);
  } else {
    modelBeer.deleteBeer(id);
    res.status(201);
  }
};

const getBeer = (req, res) => {
  const id = req.body.id;
  const beer = modelBeer.findBeer(id);

  if (!beer) {
    notFound(res, `Cerveza con ID ${id} no encontrada`);
  } else {
    res.status(201);
  }
};

const getRangeBeer = (inicio, fin) => {
  let datos=modelBeer.data.beers;
  return datos.slice(inicio,fin);
};

module.exports = {
  getRangeBeer,
  createNewBeer,
  updateBeer,
  deleteBeer,
  getBeer,
};
