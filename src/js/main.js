import { solicitud } from "../api/movieApi.js";
import { paginacionA1 } from "../components/pagination.js";
import { imprimirF } from "../components/imprimir.js";

let next = document.querySelector(".btnN");
let prev = document.querySelector(".btnP");
let contenedorPeliculas = document.querySelector(".contMovie");
let pag = 1;

// Ocultar el botón 'prev' al inicio
prev.style.display = "none";

// Función para cargar y mostrar las películas
async function cargarPeliculas(pagina) {
    // Solicitar datos de la API
    const data = await solicitud(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${pagina}`);
    
    // Limpiar el contenedor antes de mostrar nuevas películas
    contenedorPeliculas.innerHTML = "";

    // Mostrar las películas en el contenedor
    data.results.forEach(pelicula => {
        imprimirF(pelicula.poster_path, pelicula.name);
    });

    // Configurar visibilidad del botón 'prev'
    prev.style.display = pagina === 1 ? "none" : "block";
}

// Evento para el botón 'next'
next.addEventListener("click", async () => {
    pag++; // Incrementar página
    await cargarPeliculas(pag);
});

// Evento para el botón 'prev'
prev.addEventListener("click", async () => {
    if (pag > 1) {
        pag--; // Decrementar página
        await cargarPeliculas(pag);
    }
});

// Cargar la primera página al inicio
await cargarPeliculas(pag);
