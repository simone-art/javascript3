// fetch da imagem
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput');
const botao = document.querySelector('#gifButton');
const div = document.querySelector('#root');

botao.addEventListener('click', (e) => fazerFetch(e));

function fazerFetch(event) {
    event.preventDefault();
    const valorInput = input.value; 
    console.log(valorInput);
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=1&offset=0`

        fetch(url)
            .then(response => response.json()) 
            .then(json => mostrarResultado(json))
            .catch(erro => console.error(erro))
            // const json = response.json()
            // console.log(response,json);
            // console.log(response);
}

function mostrarResultado(json) {
    const arr = json.data
    console.log(arr);
    arr.forEach(element => {
    const srcImg = element.images.original.url
    div.innerHTML += `
        <img src =${srcImg}>
    `
    });
}