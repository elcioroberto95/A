let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;


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
    voltaPosicaoAnterior();  
    movimentaAtor();
    verificaColisao();
};