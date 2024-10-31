const mapPromociones = new Map([
  ["Happy Hour", "Todos los dias de 15hs a 17hs"],
  ["15% OFF", "En cervezas por Halloween"],
  ["20% OFF", "En cortes para monos"],
  ["10% OFF", "El corte de Messi"],
  ["2x1 en Kuruf", "Los sábados"],
]);

let cards = [];
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
    topText.classList.add("texto", "strokeText", "top", "centered");
    botText.classList.add("texto", "strokeText", "bottom", "centered");
    promoImg.classList.add("promoImg");
    topText.textContent = key;
    botText.textContent = value;
    promoImg.src = `./assets/imgs/promos/promo${i}.jpg`;
    promoImg.alt = "Promocion";

    textContainer.append(topText, botText);
    card.append(promoImg, textContainer);
    cards.push(card);
    i++;
  }
  containerCard.append(cards[0]);
  containerPromo.append(cardContainer);
}

generarHeader();
generarPromociones();
generarFooter();

let imagenActual = 0; //Imagen del carousel de promos
let transicion = false;
let tiempoSeg = 3;

function avanzarPromo() {
  if (!transicion) {
    let anterior = imagenActual;
    let containerPromos = document.getElementById("cardContainer");
    transicion = true;
    imagenActual = (imagenActual + 1) % cards.length;
    containerPromos.append(cards[imagenActual]);
    cards[imagenActual].style.animation = `avanzarEntra ${tiempoSeg}s forwards`;
    cards[anterior].style.animation = `avanzar ${tiempoSeg}s forwards`;
    setTimeout(() => {
      cards[anterior].style.animation = "";
      cards[imagenActual].style.animation = "";
      containerPromos.removeChild(containerPromos.firstChild);
      transicion = false;
    }, tiempoSeg * 1000);
  }
}

function retrocederPromo() {
  if (!transicion) {
    transicion = true;
    let anterior = imagenActual;
    let containerPromos = document.getElementById("cardContainer");
    imagenActual = imagenActual - 1;
    if (imagenActual == -1) {
      imagenActual = cards.length - 1;
    }
    containerPromos.insertBefore(
      cards[imagenActual],
      containerPromos.firstChild
    );
    cards[anterior].style.animation = `retroceder ${tiempoSeg}s forwards`;
    cards[
      imagenActual
    ].style.animation = `retrocederEntra ${tiempoSeg}s forwards`;
    setTimeout(() => {
      cards[imagenActual].style.animation = "";
      cards[anterior].style.animation = "";
      containerPromos.removeChild(containerPromos.children[1]);
      transicion = false;
    }, tiempoSeg * 1000);
  }
}
//Timer que cambia las promos
setInterval(avanzarPromo, 3000);
