const modelBeer = require("../model/modelBeer");

const notFound = (res, msg) => {
  res.status(400).json({ message: msg });
};

const getAllBeers = (req, res) => {
  res.json(data.beers);
};

const createNewBeer = (req, res) => {
  const name = req.body.name;
  const desc = req.body.description;

  if (!name || !desc) {
    notFound(res, "Nombre y descripcion no pueden ser vacios");
  } else {
    modelBeer.createNewBeer(name, desc);
    res.status(201);
  }
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

const getRangeBeer = (req, res) => {
  // TODO ver como separar la query
};

module.exports = {
  getAllBeers,
  createNewBeer,
  updateBeer,
  deleteBeer,
  getBeer,
};
