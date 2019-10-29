// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector("#root");
const img = document.createElement("img");
const request = new XMLHttpRequest();

request.onreadystatechange = getDados;

function getDados() { 
    // console.log("olar");
     if (request.readyState === 4 && request.status === 200) {
     const response = request.response;
    // console.log(typeof response);

    const json = JSON.parse(response);
    const data = json.data;
    const obj = data[0];
    // console.log(obj)
    // const imgSrc = obj.imagem;

    // console.log(typeof json)
    const imgSrc = obj.img;
    // console.log (json.data[0].imagem);

    img.src = imgSrc;
    div.appenChild(img)

    // console.log (json)
    } else {
    console.log(request.readyState, request.status);
    }
}

const url = "./data/dados.json";
request.open ("GET", url);
request.send(null);