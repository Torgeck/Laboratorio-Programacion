function generarHeader() {
  const header = document.querySelector("header");
  const logo = document.createElement("img");
  const boton = document.createElement("button");

  logo.setAttribute("src", "./assets/imgs/logoCompleto.png");
  logo.setAttribute("class", "logo");
  logo.setAttribute("alt", "Logo de la barberia");

  boton.textContent = "Reserva tu turno";
  //boton.addEventListener("click", pedirTurno);

  header.append(logo, boton);
}
function generarFooter() {
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
/*
//Simular turnos cada 30 minutos en horario laboral para la semana anterior y la siguiente
const ahora = new Date();
const haceSieteDias = new Date();
haceSieteDias.setDate(ahora.getDate() - 7);
//Setear hora a las 10:00:00
haceSieteDias.setHours(10);
haceSieteDias.setMinutes(0);
haceSieteDias.setSeconds(0);
haceSieteDias.setMilliseconds(0);
let turnos = [];

let tempFecha = haceSieteDias;
//Turnos entre 14 días
for(let i=0;i<14;i++){
    tempFecha.setHours(10)
    tempFecha.setMinutes(0)
    tempFecha.setSeconds(0)
    tempFecha.setMilliseconds(0)
    //Hora de 10 a 21 hs
    for(let j=10;j<21;j++){
        //console.log(tempFecha);
        //turnos.push(new Turno)
        //Sumar media hora
        tempFecha.setTime(tempFecha.getTime()+30*60*1000);
    }
    tempFecha.setDate(tempFecha.getDate()+1);
}
  */
//Colocarlos en algún HTML...

let elem; //Variable auxiliar para crear elementos
//Insertar cortes
let cantCortes = 6;
let cortesDiv = document.getElementById("cortes");
for (let i = 1; i <= cantCortes; i++) {
  elem = document.createElement("img");
  elem.src = "./assets/imgs/cortes/corte" + i + ".jpg";
  elem.style.width = "500px";
  cortesDiv.appendChild(elem);
}
//Insertar cervezas
let cervezas = document.getElementById("cervezas");
let cantCervezas = 7;
for (let i = 1; i <= cantCervezas; i++) {
  elem = document.createElement("img");
  elem.src = "./assets/imgs/cervezas/kuruf" + i + ".jpg";
  elem.style.maxWidth = "100%";
  elem.style.width = "500px";
  cervezas.appendChild(elem);
}
generarHeader();
generarFooter();
