//////////////////////////
//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
var raio = diametro/2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 6;

//variáveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variavel boolean de quando colidir
let colidiu = false;

//pontuação
let meusPontos = 0;
let pontosDoOponente = 0;

function colisaoRaquete(x,y){
    let colidiu =    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

    if(colidiu){
        velocidadeXBolinha *= -1;
    };
}
function incluiPlacar() {
    fill(300);
    text(meusPontos, 278, 30);
    text(pontosDoOponente, 321, 30);
}
function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}
function setup() {
    createCanvas(600, 400);
};
function mostraRaquete(xRaquete,yRaquete){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
};

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
};
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    };
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    };
};

function movimentaBolinha(){  
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
};
function verificaColisao(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    };
    if (yBolinha + raio > height || yBolinha - raio< 0) {
        velocidadeYBolinha *= -1;
    };
};
function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
    yRaqueteOponente+=velocidadeYOponente;

};

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    movimentaMinhaRaquete();
    verificaColisao();
    mostraRaquete(xRaqueteOponente,yRaqueteOponente);
    mostraRaquete(xRaquete,yRaquete);
    movimentaRaqueteOponente();
    colisaoRaquete(xRaquete,yRaquete);
    colisaoRaquete(xRaqueteOponente,yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
   };



