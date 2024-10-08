const mapPromociones = new Map([
  ["Happy Hour", "Todos los dias de 15hs a 17hs"],
  ["15% OFF", "En cervezas por Halloween"],
  ["20% OFF", "En cortes para monos"],
]);

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
    containerCard.append(card);
    i++;
  }
  containerPromo.append(cardContainer);
}

generarHeader("");
generarPromociones();
generarFooter("");
