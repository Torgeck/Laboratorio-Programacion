const z = require("zod");

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

const positiveNum = z.number().int().positive().default(0);

function validateNumber(object) {
  return positiveNum.safeParse(object);
}

function validateBeer(object) {
  return beerSchema.safeParse(object);
}

const createNewBeer = (name, description) => {
  let resultado = validateBeer({ name: name, description: description });
  let exito = resultado.success;
  // Checkea que le hayan pasado strings

  if (exito) {
    const newBeer = {
      id: data.beers[data.beers.length - 1].id + 1 || 1,
      name: name,
      description: description,
    };

    fs.writeFile(
      "data/beers.json",
      JSON.stringify(jsonModificado, null, 4),
      "utf8",
      (err) => {
        if (err) {
          exito = false;
        } else {
          data.setBeers = [...data.beers, newBeer];
        }
      }
    );
  }

  return exito.await();
};

const findBeer = (id) => {
  return data.beers.find((elem) => elem.id === parseInt(id, 10));
};

const updateBeer = (id) => {
  const filteredArray = data.beers.filter((elem) => elem.id !== parseInt(id));
  const unsortedArray = [...filteredArray, beer];

  data.setBeers(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  return true;
};

const deleteBeer = (id) => {
  let resp = false;
  if (!data.beers.find(id)) {
    const filteredArray = data.beers.filter(
      (elem) => elem.id !== parseInt(req.body.id)
    );
    data.setBeers([...filteredArray]);
    resp = true;
  }

  return resp;
};

const getRangeBeer = (inicio, fin) => {
  let ini = validateNumber(inicio);
  let fini = validateNumber(fin);
  let colBeers = [];

  if (ini.success && fini.success && ini.data !== fini.data) {
    if (ini.data > fini.data) {
      colBeers = data.beers.slice(ini.data, fini.data);
    } else {
      colBeers = data.beers.slice(fini.data, ini.data);
    }
  }
  return colBeers;
};
module.exports = {
  data,
  createNewBeer,
  findBeer,
  updateBeer,
  deleteBeer,
};
