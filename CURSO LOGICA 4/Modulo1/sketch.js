let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
var dificuldade = 1 ;
let somColisao;
let somPontos;
let somTrilha;

function setup() {
    //width and height
    var width = 500;
    var height = 500;
    createCanvas(width, height);
    somTrilha.loop();
};






function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoAnterior();  
    movimentaAtor();
    verificaColisao();
    incluiPontos();
    marcarPontos();
};