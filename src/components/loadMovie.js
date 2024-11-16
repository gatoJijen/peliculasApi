export let cargar = async (pag, data, imprimirF,prev)=> {
    
    
    // Limpiar el contenedor antes de mostrar nuevas películas
    document.querySelector(".contMovie").innerHTML = "";

    // Mostrar las películas en el contenedor
    data.results.forEach(pelicula => {
        imprimirF(pelicula.poster_path, pelicula.name);
    });

    // Configurar visibilidad del botón 'prev'
    prev.style.display = pag === 1 ? "none" : "block";
}