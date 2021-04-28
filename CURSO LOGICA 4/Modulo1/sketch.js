let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;


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