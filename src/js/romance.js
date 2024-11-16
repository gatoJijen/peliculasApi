import { trackSynchronousPlatformIOAccessInDev } from "next/dist/server/app-render/dynamic-rendering";
import { solicitud } from "../api/movieApi.js";
import { impresionPopularity } from "../components/popularity.js";
import { paginacionA1 } from "../components/pagination.js";
import { imprimirF } from "../components/imprimir.js";
import { generos, search } from "../components/genres.js";

const accion = 28
const aventura = 12
const animacion = 16
const comedia = 35
const crimen = 80
const documental = 99
const drama = 18
const familia = 10751
const fantasia = 14
const historia = 36
const terror = 27
const musica = 10402
const misterio = 9648
const romance = 10749
const CienciaFiccion= 878


let next = document.querySelector(".btnN")
let prev = document.querySelector(".btnP")
const data = await solicitud(`https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${romance}&page=1`)
console.log(data)
var  pag = 1



prev.style.display = "none"
next.addEventListener('click', async () => {
    pag++;
    let data = await solicitud(`https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${romance}&page=${pag}`)
    paginacionA1(data, imprimirF)
    prev.style.display="block"
})


prev.addEventListener('click', async () => {
    pag--; // Decrementar página
    let data = await solicitud(`https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${romance}&page=${pag}`)
    paginacionA1(data, imprimirF);
    if (pag === 1){
        prev.style.display="none"
    }else {
        prev.style.display = "block"
    }
});

data.results.forEach(pelicula => {
    
    document.querySelector(".romance").addEventListener(".click", search(romance,solicitud,pag,paginacionA1,imprimirF))
});
