export let impresionPopularity = (poster, titulo, popularity) => {
    try {
        if (popularity > 2000) {
        document.querySelector(".contMovie").innerHTML += `
    <section class='flex flex-col gap-4'>
        <picture class='relative pi'>
            <img class="w-60" src="https://image.tmdb.org/t/p/w500/${poster}">
            <div class='bg-black opacity-0 hover:opacity-40 top-0 absolute w-full h-full z-30'></div>
        </picture>
        <h2 class='text-white  text-wrap font-semibold text-xl'>${titulo}</h2>
    </section>`}
    } catch (error) {
    console.error("A ocurrido un error")
}}
