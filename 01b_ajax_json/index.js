// [x] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const request = new XMLHttpRequest()
const url = `./data/dados.json`
// const imagen = [];
// let contenidoA = "nome";
// let contenidoB = imagen;



request.onreadystatechange = mostrarImagen;
request.open('GET', url);
request.send();

function mostrarImagen(){
    // console.log(request.response)
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;
        // console.log(data[0].imagem);
        const div = document.querySelector('#root');

        // for (let i = 0; i <data.length; i ++) {
        //     const element = data[i];
        //     console.log(element)
        //     const img = `<img src =${element.imagem}>`;
        //     div.innerHTML += img
        // }

    
        const body = document.body;
        console.log(data)
        body.innerHTML +=  `
            <img src = ${data[0].imagem}>;
            <img src = ${data[1].imagem}>;
            <img src = ${data[2].imagem}>;
        `


    } else {

    }
}


 // contenidoA.nome + ' ' + contenidoB.imagen 

        // // <img src = ${./data/dados.json[2]}>