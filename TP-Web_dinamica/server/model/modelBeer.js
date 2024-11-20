const fs = require("fs/promises");
const z = require("zod");
//const fs = require('fs');

const data = {
  beers: require("../data/beers.json"),
  setBeers: function (data) {
    this.beers = data;
  },
};

const beerSchema = z.object({
  name: z.string().max(20),
  description: z.string().max(140).default("A homero le gusta"),
});

const positiveNum = z.coerce.number().int().positive().default(0);

function validateNumber(object) {
  return positiveNum.safeParse(object);
}

function validateBeer(object) {
  return beerSchema.safeParse(object);
}

async function writeJsonFile(newBeer) {
  let exito = true;
  try {
    await fs.writeFile(
      "data/beers.json",
      JSON.stringify([...data.beers, newBeer], null, 4)
    );
    data.setBeers = [...data.beers, newBeer];
  } catch (err) {
    console.log(err);
    exito = false;
  }
  return exito;
}

const createNewBeer = async (name, description) => {
  let resultado = validateBeer({ name: name, description: description });
  let exito = resultado.success;
  // Checkea que le hayan pasado strings

  if (exito) {
    const newBeer = {
      id: data.beers[data.beers.length - 1].id + 1 || 1,
      name: name,
      description: description,
    };

    exito = await writeJsonFile(newBeer);
  }
  return exito;
};

const findBeer = (id) => {
  const idBeer = validateNumber(id);
  const beer = data.beers.find((elem) => elem.id === idBeer.data);
  return beer;
};

const updateBeer = (beer, name, description) => {
  beer.name = name;
  beer.description = description;
  const filteredArray = data.beers.filter((elem) => elem.id !== beer.id);
  const unsortedArray = [...filteredArray, beer];

  data.setBeers(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  return true;
};

const deleteBeer = (beer) => {
  console.log(beer);
  const id = beer.id;
  let resp = false;

  if (data.beers.find((elem) => elem.id === id)) {
    const filteredArray = data.beers.filter((elem) => elem.id !== parseInt(id));
    data.beers = filteredArray;
    resp = true;
  }
  return resp;
};

const getRangeBeer = (inicio, fin) => {
  let ini = validateNumber(inicio);
  let fini = validateNumber(fin);
  let colBeers = [];

  console.log(`${ini.success} , ${ini.data}`);

  if (ini.success && fini.success && ini.data !== fini.data) {
    if (ini.data > fini.data) {
      colBeers = data.beers.slice(fini.data, inicio.data);
    } else {
      colBeers = data.beers.slice(inicio.data, fini.data);
    }
  }

  return colBeers;
};
module.exports = {
  data,
  getRangeBeer,
  createNewBeer,
  findBeer,
  updateBeer,
  deleteBeer,
};
