const modelBeer = require("../model/modelBeer");
const z = require("zod");


const createNewBeer = async (body) => {
  const name = body.name;
  const desc = body.description;
  let exito = true;
  console.log(`${name} , ${desc}`);

  //Los campos name y description son obligatorios
  if (!name || !desc) {
    exito = false;
  } else {
    exito = await modelBeer.createNewBeer(name, desc);
  }
  return exito;
};

const updateBeer = (id,datos) => {
  //traer de memoria
  const beer = modelBeer.existBeer(id);
  let exito=false;
  if (!beer) {
    notFound(res, `Cerveza con ID ${id} no encontrada`);
  } else {
    //extraer del body los datos
    const beerName = datos.name;
    const beerDesc = datos.description;
    if(beerName!=undefined && beerDesc!=undefined){
      //guardar en disco
      exito = modelBeer.updateBeer(beer,beerName,beerDesc);
      exito=true;
    }
  }
  return exito;
};

const deleteBeer = (id) => {
  const beer = modelBeer.findBeer(id);
  let exito=true;
  if (beer === undefined) {
    exito=false;
  } else {
    exito=modelBeer.deleteBeer(id);
  }
  return exito
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
