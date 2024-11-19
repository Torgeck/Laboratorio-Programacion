const data = {
  beers: require("../data/beers.json"),
  setBeers: function (data) {
    this.beers = data;
  },
};
const createNewBeer = (name, description) => {
  const newBeer = {
    id: data.beers[data.beers.length - 1].id + 1 || 1,
    name: name,
    description: description,
  };

  data.setBeers = [...data.beers, newBeer];
  
  return true;
};

const findBeer = (id) => {
  return data.beers.find((elem) => elem.id === parseInt(id));
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
module.exports={
  data,
  createNewBeer
}