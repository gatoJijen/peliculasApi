export let imprimirF = (poster, titulo) => {
    document.querySelector(".contMovie").innerHTML += `
    <section class='flex flex-col relative hover:scale-95 transition-all w-60'>
        <picture class='pi'>
            <img class="w-full h-80" src="https://image.tmdb.org/t/p/w500/${poster}">
        </picture>
        <footer class="bg-slate-600 w-full p-2 flex justify-center items-center h-12">
                <h2 class='text-white text-center text-wrap font-semibold text-md'>${titulo}</h2>
        </footer>
        <div class='bg-black opacity-0 hover:opacity-40 top-0 absolute hover:cursor-pointer w-full h-full z-30'></div>
    </section>
`}