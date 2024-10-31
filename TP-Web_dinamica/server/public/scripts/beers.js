const mapCervezas = new Map([
  [
    "Cruzando el puente",
    "Chispeante, alegre, cítrica y refrescante. De notas a maracuyá, pomelo y ananá ",
  ],
  [
    "Dolce Vita",
    "Cerveza rubia, aromática, ligera, seca y muy refrescante. Presencia de lúpulo floral - frutado. ibu 31 srm 3.5 abv 4,5%",
  ],
  [
    "Brava",
    "Cerveza roja. seca, fuerte y lupulada. Soporte de maltas de perfil tostado, bizcocho y caramelo. ibu 62 srm 12 abv 7%",
  ],
  [
    "Deporter",
    "Cerveza negra. fuerte y de carácter maltoso. Notas a caramelo, chocolate y toffee. ibu 32 srm 42 abv 6%",
  ],
  ["IPA Moderna", "Es como una IPA pero esta viene adicta al skibidi toilet"],
  [
    "Del Limay",
    "Cerveza rubia. equilibrada, orientada a la malta con un suave lupulado floral. abv %5 srm 4 ibu 18",
  ],
  [
    "Sueño Venice",
    "Cerveza rubia. equilibrada, orientada a la malta con un suave lupulado floral. abv %5 srm 4 ibu 18",
  ],
]);

generarHeader();
generarCervezas();
generarFooter();

function generarCervezas() {
  const container = document.getElementById("catalogo");
  let beer;
  let figCaption;
  let beerImg;
  let name;
  let descr;
  let textContainer;
  let i = 1;

  for (let [key, value] of mapCervezas) {
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
    beerImg.src = `../assets/imgs/cervezas/kuruf${i}.jpg`;
    beerImg.alt = "Cerveza";
    name.textContent = key;
    descr.textContent = value;

    figCaption.append(descr);
    textContainer.append(name, figCaption);
    beer.append(beerImg, textContainer);
    container.appendChild(beer);
    i++;
  }
}

function agregarCerveza(nombre, descripcion) {
  mapCervezas.set(nombre, descripcion);
}
