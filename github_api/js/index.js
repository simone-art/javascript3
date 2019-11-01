
// const url = `http://api.giphy.com/v/gifs/search?q=beyonce&api_key=dc6zaTOxFJmzC&limit=1&offset=0`

const url = 'https://api.github.com/users/simone-art'

async function buscarApi(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json();
            console.log(json)
            criarImagem(json.avatar_url);


        } else {
            //USA ESTOS DOS COMANDO PARA INDICAR QUE HAY UN ERROR EN LA REQUISICIÓN DEL API//
            // console.error("nao foi possível receber o resultado da api");  
            const err = `${response.status}:${response.statusText}`
            criaErro(err);
            // document.body.innerHTML = `<h1 style="color: blue">${response.status}:${response.statusText}</h1>`
        }

    } catch (error) {
        criaErro(`falha na requisiçao de API`)
    }
}



// .then(response => response.json())
// .then(json => criarImagem(json.data))
// .catch(erro => console.error(erro))


function criarImagem(src) {
    // console.log(lista);
    document.body.innerHTML = `
        <img src =${src}>
        `
}

criaErro = (erro) => {
    document.body.innerHTML = `<h1 style="color: blue">${erro}</h1>`
}

buscarApi(url)
