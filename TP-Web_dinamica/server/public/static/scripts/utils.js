function generarHeader() {
  const header = document.querySelector("header");
  const logo = document.createElement("img");
  const boton = document.createElement("button");
  const seccionCervezas = document.createElement("a");
  const seccionCortes = document.createElement("a");
  const cajaButonera = document.createElement("nav");

  logo.setAttribute("src", `/static/assets/imgs/logoCompleto.png`);
  logo.setAttribute("alt", "Logo de la barberia");
  logo.classList.add("logo");

  seccionCervezas.classList.add("link", "texto");
  seccionCervezas.textContent = "Nuestras Cervezas";
  seccionCervezas.href = `/beers`;

  seccionCortes.classList.add("link", "texto");
  seccionCortes.textContent = "Galeria Cortes";
  seccionCortes.href = `/haircuts`;

  cajaButonera.classList.add("botonera");

  boton.textContent = "Reserva tu turno";
  //boton.addEventListener("click", pedirTurno);

  logo.addEventListener("click", () => (location.href = `/index`));

  cajaButonera.append(seccionCervezas, seccionCortes);
  header.append(logo, cajaButonera, boton);
}

function generarFooter(dire) {
  const footer = document.querySelector("footer");
  const linkInsta = document.createElement("a");
  const linkTik = document.createElement("a");
  const insta = document.createElement("img");
  const tik = document.createElement("img");

  insta.setAttribute("src", `/static/assets/icons/instagram.svg`);
  insta.setAttribute("class", "socials");
  insta.setAttribute("alt", "Icono Instagram");
  linkInsta.setAttribute("href", "https://www.instagram.com/labar.beer/");
  linkInsta.setAttribute("target", "_blank");
  linkInsta.setAttribute("rel", "noopener noreferrer");

  tik.setAttribute("src", `/static/assets/icons/tiktok.svg`);
  tik.setAttribute("class", "socials");
  tik.setAttribute("alt", "Icono TikTok");
  linkTik.setAttribute("href", "https://www.tiktok.com/@labar.beer");
  linkTik.setAttribute("target", "_blank");
  linkTik.setAttribute("rel", "noopener noreferrer");

  linkInsta.appendChild(insta);
  linkTik.appendChild(tik);
  footer.append(linkInsta, linkTik);
}
