
const url = `http://api.giphy.com/v1/gifs/search?q=beyonce&api_key=dc6zaTOxFJmzC&limit=1&offset=0`

'https://api.github.com/users/simone-art'

async function buscarApi(url) {
    const response = await fetch(url)
    const json = await response.json();
    criarImagem(json.data)
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
