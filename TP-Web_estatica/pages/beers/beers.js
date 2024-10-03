import { generarHeader, generarFooter, generarCervezas } from "../../utils.js";
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

const direLogo = '../../assets/imgs/logoCompleto.png';
const direPagCervezas = 'beers.html';
const direPagCortes = '../haircuts/haircuts.html';
const direPagPrincipal = '../../index.html';

const direIconoTikTok = '../../assets/icons/tiktok.svg'
const direIconoInsta = '../../assets/icons/instagram.svg';

generarFooter(direIconoTikTok,direIconoInsta);
generarHeader(direLogo,direPagCervezas,direPagCortes,direPagPrincipal);
generarCervezas(mapCervezas);


function agregarCerveza(nombre, descripcion) {
  mapCervezas.set(nombre, descripcion);
}
