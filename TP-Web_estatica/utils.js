export function generarHeader(direccion) {
  const header = document.querySelector("header");
  const logo = document.createElement("img");
  const boton = document.createElement("button");
  const seccionCervezas = document.createElement("a");
  const seccionCortes = document.createElement("a");
  const cajaButonera = document.createElement("div");

  logo.setAttribute("src", `${direccion}./assets/imgs/logoCompleto.png`);
  logo.setAttribute("alt", "Logo de la barberia");
  logo.classList.add("logo");

  seccionCervezas.classList.add("link");
  seccionCervezas.textContent = "Nuestras Cervezas";
  seccionCervezas.href = `${direccion}./pages/beers/beers.html`;

  seccionCortes.classList.add("link");
  seccionCortes.textContent = "Galeria Cortes";
  seccionCortes.href = `${direccion}./pages/haircuts/haircuts.html`;

  cajaButonera.classList.add("botonera");

  boton.textContent = "Reserva tu turno";
  //boton.addEventListener("click", pedirTurno);

  logo.addEventListener(
    "click",
    () => (location.href = `${direccion}./index.html`)
  );

  cajaButonera.append(seccionCervezas, seccionCortes);
  header.append(logo, cajaButonera, boton);
}

export function generarFooter(direccion) {
  const footer = document.querySelector("footer");
  const linkInsta = document.createElement("a");
  const linkTik = document.createElement("a");
  const insta = document.createElement("img");
  const tik = document.createElement("img");

  insta.setAttribute("src", `${direccion}./assets/icons/instagram.svg`);
  insta.setAttribute("class", "socials");
  insta.setAttribute("alt", "Icono Instagram");
  linkInsta.setAttribute("href", "https://www.instagram.com/labar.beer/");
  linkInsta.setAttribute("target", "_blank");
  linkInsta.setAttribute("rel", "noopener noreferrer");

  tik.setAttribute("src", `${direccion}./assets/icons/tiktok.svg`);
  tik.setAttribute("class", "socials");
  tik.setAttribute("alt", "Icono TikTok");
  linkTik.setAttribute("href", "https://www.tiktok.com/@labar.beer");
  linkTik.setAttribute("target", "_blank");
  linkTik.setAttribute("rel", "noopener noreferrer");

  linkInsta.appendChild(insta);
  linkTik.appendChild(tik);
  footer.append(linkInsta, linkTik);
}

//Insertar cervezas
export function generarCervezas(mapBeer) {
  const container = document.getElementById("catalogo");
  let beer;
  let imgWrapper;
  let beerImg;
  let name;
  let descr;
  let textContainer;
  let i = 1;

  for (let [key, value] of mapBeer) {
    beer = document.createElement("div");
    textContainer = document.createElement("div");
    beerImg = document.createElement("img");
    name = document.createElement("h2");
    descr = document.createElement("p");

    beer.classList.add("cerveza");
    name.classList.add("titulo");
    descr.classList.add("descripcion");
    beerImg.classList.add("beerImg");
    textContainer.classList.add("container", "text", "justify-left");
    beerImg.src = `../.././assets/imgs/cervezas/kuruf${i}.jpg`;
    name.textContent = key;
    descr.textContent = value;

    textContainer.append(name, descr);
    beer.append(beerImg, textContainer);
    container.appendChild(beer);
    i++;
  }
}
