import { generarHeader, generarFooter, generarCortes } from "../../utils.js";

const direLogo = '../../assets/imgs/logoCompleto.png';
const direPagCervezas = '../beers/beers.html';
const direPagCortes = 'haircuts.html';
const direPagPrincipal = '../../index.html';

const direIconoTikTok = '../../assets/icons/tiktok.svg'
const direIconoInsta = '../../assets/icons/instagram.svg';

generarFooter(direIconoTikTok,direIconoInsta);
generarHeader(direLogo,direPagCervezas,direPagCortes,direPagPrincipal);