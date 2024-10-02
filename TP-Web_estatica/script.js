
export function generarHeader() {
  const header = document.querySelector("header");
  const logo = document.createElement("img");
  const boton = document.createElement("button");
  const seccionCervezas = document.createElement("a");
  const seccionCortes = document.createElement("a");
  const cajaButonera = document.createElement("div");

  logo.setAttribute("src", "./assets/imgs/logoCompleto.png");
  logo.setAttribute("class", "logo");
  logo.setAttribute("alt", "Logo de la barberia");

  seccionCervezas.textContent = "Nuestras Cervezas";
  seccionCervezas.setAttribute("href","./pages/beers/beers.html");

  seccionCortes.textContent = "Galeria Cortes";
  seccionCortes.setAttribute("href","./pages/haircuts/haircuts.html");

  cajaButonera.setAttribute("class","botonera");

  boton.textContent = "Reserva tu turno";
  //boton.addEventListener("click", pedirTurno);

  logo.addEventListener("click", () => (location.href = "./index.html"));

  cajaButonera.append(seccionCervezas, seccionCortes);
  header.append(logo, cajaButonera, boton);

}
export function generarFooter() {
  const footer = document.querySelector("footer");
  const linkInsta = document.createElement("a");
  const linkTik = document.createElement("a");
  const insta = document.createElement("img");
  const tik = document.createElement("img");

  insta.setAttribute("src", "./assets/icons/instagram.svg");
  insta.setAttribute("class", "socials");
  insta.setAttribute("alt", "Icono Instagram");
  linkInsta.setAttribute("href", "https://www.instagram.com/labar.beer/");
  linkInsta.setAttribute("target", "_blank");
  linkInsta.setAttribute("rel", "noopener noreferrer");

  tik.setAttribute("src", "./assets/icons/tiktok.svg");
  tik.setAttribute("class", "socials");
  tik.setAttribute("alt", "Icono TikTok");
  linkTik.setAttribute("href", "https://www.tiktok.com/@labar.beer");
  linkTik.setAttribute("target", "_blank");
  linkTik.setAttribute("rel", "noopener noreferrer");

  linkInsta.appendChild(insta);
  linkTik.appendChild(tik);
  footer.append(linkInsta, linkTik);
}

generarFooter();
generarHeader();
