const data = {
  beers: require("../data/beers.json"),
  setBeers: function (data) {
    this.beers = data;
  },
};

const notFound = (res, msg) => {
  res.status(400).json({ message: msg });
};

const getAllBeers = (req, res) => {
  res.json(data.beers);
};

const createNewBeer = (req, res) => {
  const newBeer = {
    id: data.beers[data.beers.length - 1].id + 1 || 1,
    name: req.body.name,
    description: req.body.description,
  };

  if (!newBeer.name || !newBeer.description) {
    notFound(res, "Nombre y descripcion no pueden ser vacios");
  } else {
    data.setBeers = [...data.beers, newBeer];
    res.status(201).json(data.beers);
  }
};

const updateBeer = (req, res) => {
  const beer = data.beers.find((elem) => elem.id === parseInt(req.body.id));
  const beerName = req.body.name;
  const beerDesc = req.body.description;

  if (!beer) {
    notFound(res, `Cerveza con ID ${req.body.id} no encontrada`);
  } else {
    if (beerName) beer.name = beerName;
    if (beerDesc) beer.description = beerDesc;

    // "Saco" del arreglo a la cerveza actualizada para luego agregarla
    const filteredArray = data.beers.filter(
      (elem) => elem.id !== parseInt(req.body.id)
    );
    const unsortedArray = [...filteredArray, beer];

    // Ordeno el arreglo por id
    data.setBeers(
      unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    );
    res.status(201).json(data.beers);
  }
};

const deleteBeer = (req, res) => {
  const beer = data.beer.find((elem) => elem.id === parseInt(req.body.id));

  if (!beer) {
    notFound(res, `Cerveza con ID ${req.body.id} no encontrada`);
  } else {
    // Elimino a la cerveza si la encuentro
    const filteredArray = data.beers.filter(
      (elem) => elem.id === parseInt(req.body.id)
    );

    data.setBeers([...filteredArray]);
    // Devuelvo todo el arreglo de cervezas, podria ser cualquier otra cosa
    res.status(201).json(data.beers);
  }
};

const getBeer = (req, res) => {
  const beer = data.beers.find((elem) => elem.id === req.body.id);

  if (!beer) {
    notFound(res, `Cerveza con ID ${req.body.id} no encontrada`);
  } else {
    res.status(201).json(beer);
  }
};

const getRangeBeer = (req, res) => {};

module.exports = {
  getAllBeers,
  createNewBeer,
  updateBeer,
  deleteBeer,
  getBeer,
};
