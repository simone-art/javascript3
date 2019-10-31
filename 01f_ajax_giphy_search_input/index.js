// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const input = document.querySelector('#gifInput');
// console.log(input);

const botao = document.querySelector('#gifButton');
// console.log (botao);

botao.addEventListener('click', function (evento) {
    fazerAlgoDepoisDeClicar(evento);
});

const div = document.querySelector('#root');


function fazerAlgoDepoisDeClicar(evento) {
    evento.preventDefault();
    console.log('será que eu cliquei');
    const valorDoInput = input.value;
    console.log(valorDoInput)

    const minhaChave = 'dc6zaTOxFJmzC';
    const oQueQueroBuscar = input.value;
    // const endereco = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&offset=0`;
    const enderecoAPI = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=20`;
    console.log(enderecoAPI)

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open('GET', enderecoAPI);
    requisicaoHttp.send();

    requisicaoHttp.onreadystatechange = function pegandoResposta() {
        console.log(requisicaoHttp.response);
        if (requisicaoHttp.readyState === 4 & requisicaoHttp.status === 200) {
            const resposta = requisicaoHttp.response;
            const converterTextoEmObjeto = JSON.parse(resposta);
            // console.log("a resposta está pronta");
            // console.log(typeof resposta);
            // console.log(json);
        
        } else {
                const statusCode = requisicaoHttp.status;
                const statusMensagem = requisicaoHttp.statusText;
            //     console.error("Este é meu console error", statusCode, statusMensagem);
            //     console.warn('Este é o meu console warn');
            
            //     div.innerHTML = <h1> FALHA 403: FORBIDDEN</h1>;
            // }
        } 
        
            const resposta = requisicaoHttp.response;
            const respTransfObj = JSON.parse(resposta);
            const arrData = respTransfObj.data;
    // console.log(arrData[0].images.url);

            div.innerHTML = `
            <img src=${arrData[0].images.original.url}>
            <img src=${arrData[1].images.original.url}>
            <img src=${arrData[2].images.original.url}>
    `
}
}