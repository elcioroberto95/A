let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let xCarro = 420;
let yAtor = 400;
var xAtor = 150;
function preload(){
    //loadImage é utilizado para carregar a imagem
    imagemDaEstrada = loadImage("Assets/imagens/estrada.png");
    imagemDoAtor = loadImage("Assets/imagens/ator-1.png");
    imagemCarro = loadImage("Assets/imagens/carro-1.png")
};
function mostraCarro(){
    image(imagemCarro, xCarro, 40, 50, 40)
};
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
};
function movimentaCarro(){
    
        xCarro = xCarro - 2;
        if(xCarro < -10){
            xCarro = 620;
            xCarro += 2;
        }
}
function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -=3;
    }
    else if(keyIsDown(DOWN_ARROW)){
        yAtor +=3;
    }
    else if(keyIsDown(LEFT_ARROW)){
        xAtor-=3;
    }
    else if(keyIsDown(RIGHT_ARROW)){
        xAtor+=3;
    }
}
function setup() {
    //width and height
    var width = 500;
    var height = 500;
    createCanvas(width, height);
};

function draw() {
    background(imagemDaEstrada); 
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
};