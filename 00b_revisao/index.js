// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [] arrow function
// [] template string

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener("click", mudaBody)

function mudaBody() {
body.style.backgroundColor = new MudaCor().geraRGB();
};

// class MudaCor {
//   constructor() {
//   this.r = this.geraInteiro(255);
//   this.g = this.geraInteiro(255);
//   this.b = this.geraInteiro(255);
//   // body.style.backgroundColor = "rgb( $(r), $(g), $(b)";
//   }

//   geraInteiro(num) {
//   return parseInt(Math.random() * num);
//   };
//   geraRGB() {
//     return "rgb(${this.r}, ${this.g}, ${this.b})";
//   } 

// };

// function mudaBody() {
//   const mudaC = new MudaCor()
//   const numero = mudaC.r
//   console.log("mudaC", mudaC);

// };
