//código do carro

let xCarros = [600, 600, 600,600,600,600];
let yCarros = [40, 96, 150,150,250,300]; 
let comprimentoCarro = 50;
let alturaCarro = 40;

let velocidadeCarros = [2*dificuldade, 2.5*dificuldade, 3.2*dificuldade,2*dificuldade,4*dificuldade,1*dificuldade];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoAnterior(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}