let indiceActual = 0;
let finActual = 6;
let items = 6;
let total = 0;
const loader = document.querySelector(".loader");

const getCervezas = async (indiceInicio, indiceFin) => {
  const API_URL = `http://localhost:9000/api/beers?inicio=${indiceInicio}&fin=${indiceFin}`;
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error(`An error occurred: ${respuesta.status}`);
  }

  const data = await respuesta.json();

  return data;
};

const generarCartasCervezas = (colCervezas) => {
  const container = document.getElementById("catalogo");
  let beer;
  let figCaption;
  let beerImg;
  let name;
  let descr;
  let textContainer;

  colCervezas.forEach((cerveza) => {
    beer = document.createElement("figure");
    textContainer = document.createElement("div");
    beerImg = document.createElement("img");
    name = document.createElement("h2");
    figCaption = document.createElement("figcaption");
    descr = document.createElement("p");

    beer.classList.add("cerveza");
    name.classList.add("texto", "titulo");
    descr.classList.add("texto", "descripcion");
    beerImg.classList.add("beerImg");
    textContainer.classList.add("container", "text", "justify-left");
    // Ver como solucionar las imgs defaults
    beerImg.src = `/static/assets/imgs/cervezas/kuruf${cerveza.id}.jpg`;
    beerImg.alt = "Cerveza";
    name.textContent = cerveza.name;
    descr.textContent = cerveza.description;

    figCaption.append(descr);
    textContainer.append(name, figCaption);
    beer.append(beerImg, textContainer);
    container.appendChild(beer);
  });
};

function mostrarLoader() {
  loader.classList.add("show");
}

function ocultarLoader() {
  loader.classList.remove("show");
}

const cargarCartas = async (inicio, fin) => {
  // Agregar loader
  mostrarLoader();

  setTimeout(async () => {
    try {
      const colCervezas = await getCervezas(inicio, fin);
      generarCartasCervezas(colCervezas);
    } catch (error) {
      console.log(error.message);
    } finally {
      ocultarLoader();
    }
  }, 1500);
};

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Ver si se puede tener un total de cervezas para no cargar cuando no sea necesario
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      indiceActual += items;
      finActual += items;
      cargarCartas(indiceActual, finActual);
    }
  },
  { passive: true }
);

generarHeader();
cargarCartas(indiceActual, finActual);
generarFooter();