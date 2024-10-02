import { generarHeader, generarFooter } from "./utils.js";

generarHeader("");
generarFooter("");
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

/*
let elem; //Variable auxiliar para crear elementos
//Insertar cortes
let cantCortes = 6;
let cortesDiv = document.getElementById("cortes");
for (let i = 1; i <= cantCortes; i++) {
  elem = document.createElement("img");
  elem.src = "./assets/imgs/cortes/corte" + i + ".jpg";
  elem.classList.add("cortes");
  //elem.style.width = "500px";
  cortesDiv.appendChild(elem);
}
//Insertar cervezas
let cervezas = document.getElementById("cervezas");
let cantCervezas = 7;
for (let i = 1; i <= cantCervezas; i++) {
  elem = document.createElement("img");
  elem.classList.add("cervezas");
  elem.src = "./assets/imgs/cervezas/kuruf" + i + ".jpg";
  elem.style.maxWidth = "100%";
  //elem.style.width = "500px";
  cervezas.appendChild(elem);
}
  */
