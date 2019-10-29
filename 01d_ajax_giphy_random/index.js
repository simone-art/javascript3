// fetch da imagem
// [X] adicionar a tag <script> no html
// [X] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function
//XMLHttpRequest do gif 

const request = new XMLHttpRequest()
// const url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho'

const quero = 'beyonce'
const urlRequest= `http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=4&offset=0`


// const url= 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=4&offset=0'

request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();

function mostraGif(){
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
//         // console.log(typeof response)
        const json = JSON.parse(response);
        const body = document.body;
        body.innerHTML = `
        <img src = ${json.data[0].images.original.url}>
        <img src = ${json.data[1].images.original.url}>
        <img src = ${json.data[2].images.original.url}>
        `
        // console.log(json.data.images.original.url);
//         let imagem = json.data.images.original.url;
//         let acessar = document.getElementById("imagem");
//         acessar.setAttribute("src", imagem);

        // const imgSrc = json.data[3].images.original.url
        // document.querySelector('#imagem').src = imgSrc;

    } else {

    }
}
