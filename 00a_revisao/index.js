// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [X] alterar cor de <body>
// [X] escutar o clique do botão
// [X] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

console.log ("olar");

// const body = document.querySelector("body");
// console.log (body);

const body = document.body;
console.log (body);

body.style.backgroundColor = "purple";
// "rgb(,   ,  )";
const n = Math.random();
const n2 = n * 255;
const int = parseInt(n2);
console.log("numero:", n);
console.log ("numero", n2);
console.log("int", int);

// const r =
// botao.addEventListener("click", clicouBotao);
// console.log(intRandom)


const botao = document.getElementById("trocaCor");
// console.log (botao);
botao.addEventListener("click", clicouBotao);

function geraInteriro() {
   const n = parseInt(Math.random () * 255);
   console.log(n);
    return n;
}

function clicouBotao() {
    // const r = parseInt(Math.random () * 255);
    // const g = parseInt(Math.random () * 255);
    // const b = parseInt(Math.random () * 255);
    // const intRandom = parseInt(Math.random () * 255)

    const r = geraInteriro();
    const g = geraInteriro();
    const b = geraInteriro();
    console.log (r,g,b);
    
    // console.log("entrei na funçao");
    body.style.backgroundColor = "rgb("+ r +", "+ g +","+ b +")";
    console.log("rgb("+ r +", "+ g +","+ b +")");
}
    // const h1 = document.body.h1
// console.log ("h1")