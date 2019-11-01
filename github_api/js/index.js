
const url = `http://api.giphy.com/v/gifs/search?q=beyonce&api_key=dc6zaTOxFJmzC&limit=1&offset=0`

'https://api.github.com/users/simone-art'

async function buscarApi(url) {
    const response = await fetch(url)
    if (response.ok) {
        const json = await response.json();
        criarImagem(json.data)

    } else {
        //USA ESTOS DOS COMANDO A FIN DE ENCONTRAR UN ERROR//
        console.error("nao foi possível receber o resultado da api");  
        document.body.innerHTML = `<h1 style="color: blue">${response.status}:${response.statusText}</h1>`
    }
        // .then(response => response.json())
        // .then(json => criarImagem(json.data))
        // .catch(erro => console.error(erro))

}


    function criarImagem(lista) {
        console.log(lista);
        document.body.innerHTML = `
        <img src =${lista[0].images.original.url}>
        `
}

buscarApi(url).catch(err => console.error(err))
