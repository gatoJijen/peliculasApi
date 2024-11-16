export let generos = (poster, titulo, id) => {
    try {
        if (id) {
            document.querySelector(".contMovie").innerHTML += `
    <section class='flex flex-col relative hover:scale-95 transition-all w-60'>
        <picture class='pi'>
            <img class="w-full h-80" src="https://image.tmdb.org/t/p/w500/${poster}">
        </picture>
        <footer class="bg-slate-600 w-full p-2 flex justify-center items-center h-12">
                <h2 class='text-white text-center text-wrap font-semibold text-md'>${titulo}</h2>
        </footer>
        <div class='bg-black opacity-0 hover:opacity-40 top-0 absolute hover:cursor-pointer w-full h-full z-30'></div>
    </section>`}
        else{
            document.querySelector(".error").innerHTML = `
                <h1 class='text-orange-500 text-4xl font-bold'>No se a encontrado ninguna pagina con el genero "accion"</h1>
            ` 
        }
    } catch (error) {
    console.error("A ocurrido un error")
}}

export let search = async (id, solicitud,pag, paginacion,imprimirF) => {
    let data = await solicitud(`https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${id}&page=${pag}`);
    paginacion(data, imprimirF)
};
