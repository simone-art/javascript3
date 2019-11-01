// funçao assíncrona//


function ensaboar() {
    console.log("começou a ensaboar");
    setTimeout(() => {
        console.log("terminou de ensaboar");
        enxaguar()
    }, 5000);
}

function enxaguar(){
    console.log("comecou a enxaguar");
    setTimeout(() => {
        console.log("terminou de enxaguar");
    }, 2000);
}

function lavaLouca(){
ensaboar();
                            
}