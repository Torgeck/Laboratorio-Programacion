const mapCortes = new Map([
    [
        "Corte Clásico", 
        "Un corte tradicional y elegante para cualquier ocasión.",
    ],
    [
        "Fade", 
        "Un degradado suave y moderno.",
    ],
    [
        "Mohicano", 
        "Un corte bien jugado, ideal para los que quieren destacar y romper con lo clásico.",
    ],
    [
        "Mid Fade", 
        "Es un fade pero con un toque mas clasico.",
    ],
  ]);
  
  generarHeader("../../");
  generarCortes();
  generarFooter("../../");
  
  function generarCortes() {
    const container = document.getElementById("galeria-cortes");
    let corte;
    let figCaption;
    let corteImg;
    let name;
    let descr;
    let textContainer;
    let i = 1;
  
    for (let [key, value] of mapCortes) {
      corte = document.createElement("figure");
      textContainer = document.createElement("div");
      corteImg = document.createElement("img");
      name = document.createElement("h2");
      figCaption = document.createElement("figcaption");
      descr = document.createElement("p");
  
      corte.classList.add("corte");
      name.classList.add("titulo");
      descr.classList.add("descripcion");
      corteImg.classList.add("corteImg");
      textContainer.classList.add("container", "text", "justify-left");
      corteImg.src = `../.././assets/imgs/cortes/corte${i}.jpg`;
      corteImg.alt = "Corte de Pelo";
      name.textContent = key;
      descr.textContent = value;
  
      figCaption.append(descr);
      textContainer.append(name, figCaption);
      corte.append(corteImg, textContainer);
      container.appendChild(corte);
      i++;
    }
  }
  
  function agregarCorte(nombre, descripcion) {
    mapCortes.set(nombre, descripcion);
  }