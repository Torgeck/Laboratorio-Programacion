const mapPromociones = new Map([
  ["Happy Hour", "Todos los dias de 15hs a 17hs"],
  ["15% OFF", "En cervezas por Halloween"],
  ["20% OFF", "En cortes para monos"],
  ["10% OFF", "El corte de Messi"],
  ["2x1 en Kuruf", "Los sábados"]
]);

let cards=[]
function generarPromociones() {
  const containerPromo = document.getElementById("promociones");
  const containerCard = document.getElementById("cardContainer");
  let card, promoImg, textContainer, topText, botText;
  let i = 1;

  for (let [key, value] of mapPromociones) {
    card = document.createElement("div");
    textContainer = document.createElement("div");
    promoImg = document.createElement("img");
    topText = document.createElement("h3");
    botText = document.createElement("h3");

    card.classList.add("card");
    textContainer.classList.add("textContainer");
    topText.classList.add("strokeText", "top", "centered");
    botText.classList.add("strokeText", "bottom", "centered");
    promoImg.classList.add("promoImg");
    topText.textContent = key;
    botText.textContent = value;
    promoImg.src = `./assets/imgs/promos/promo${i}.jpg`;
    promoImg.alt = "Promocion";

    textContainer.append(topText, botText);
    card.append(promoImg, textContainer);
    cards.push(card)
    i++;
  }
  containerCard.append(cards[0]);
  containerPromo.append(cardContainer);
}

generarHeader("");
generarPromociones();
generarFooter("");
/*function carousel(){
  let tiempo = 2;//segundos

  let container=document.getElementById("cardContainer");

  let cantPromos=container.childElementCount;
  let promos=container.children;
  let elem;
  for(let i=0;i< cantPromos;i++){
    promos[i].style.visibility="hidden";
  }

  while(false){

  }
}*/
let imagenActual=0 //Imagen del carousel de promos
function avanzarPromo(){
  let containerPromos=document.getElementById("cardContainer");
  
  containerPromos.removeChild(containerPromos.firstChild)
  imagenActual=(imagenActual+1)%cards.length
  containerPromos.append(cards[imagenActual]);
  
}
function retrocederPromo(){
  let containerPromos=document.getElementById("cardContainer");
  containerPromos.removeChild(containerPromos.firstChild)
  imagenActual=(imagenActual-1)
  if(imagenActual==-1){
    imagenActual=cards.length-1;
  }
  containerPromos.append(cards[imagenActual]);
}
//Timer que cambia las promos
setInterval(avanzarPromo, 4000);