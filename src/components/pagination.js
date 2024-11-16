export let paginacion = (datos, imprimirF)=>{
    document.querySelector(".contMovie").innerHTML = ""
    datos.results.forEach(pelicula => {
        imprimirF(pelicula.poster_path, pelicula.name)
    });
}

export let paginacionA1 = (datos, imprimirF)=>{
    document.querySelector(".contMovie").innerHTML = ""
    datos.results.forEach(pelicula => {
        imprimirF(pelicula.poster_path, pelicula.title)
    });
}