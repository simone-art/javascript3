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
const botao = document.getElementById("trocaCor");
console.log (body);

body.style.backgroundColor = "purple";
botao.addEventListener("click", function () {
    
    const r = geraInteriro();
    const g = geraInteriro();
    const b = geraInteriro();
    console.log (r,g,b);
    body.style.backgroundColor = "rgb("+ r +", "+ g +","+ b +")";
});
// "rgb(,   ,  )";
// const n = Math.random();
// const n2 = n * 255;
// const int = parseInt(n2);
// console.log("numero:", n);
// console.log ("numero", n2);
// console.log("int", int);

// const r =
// botao.addEventListener("click", clicouBotao);
// console.log(intRandom)


// console.log (botao);

function geraInteriro() {
   const n = parseInt(Math.random () * 255);
   console.log(n);
    return n;
}

// function clicouBotao() {
//     // const r = parseInt(Math.random () * 255);
//     // const g = parseInt(Math.random () * 255);
//     // const b = parseInt(Math.random () * 255);
//     // const intRandom = parseInt(Math.random () * 255)

    
//     // console.log("entrei na funçao");
//     console.log("rgb("+ r +", "+ g +","+ b +")");
// }
//     // const h1 = document.body.h1
// // console.log ("h1")
// // [x] alterar cor de <body>
// // [x] escutar o clique do botão
// // [x] criar função de alterar a cor usando rgb()
// // [x] usar Math.random() e Math.floor() ou parseInt()

// const body = document.body;
// const botao = document.getElementById('trocaCor');

// body.style.backgroundColor = 'purple';
// // 'rgb(____,_____,____)'
// botao.addEventListener('click', mudaCor);

// function geraInteiro() {
//   const n = parseInt(Math.random() * 255);
//   return n;
// }

// function mudaCor() {
//   const r = geraInteiro();
//   const g = geraInteiro();
//   const b = geraInteiro();
//   body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
// }
