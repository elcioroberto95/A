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
let chanceDeErrar = 0;

//variavel boolean de quando colidir
let colidiu = false;

//pontuação
let meusPontos = 0;
let pontosDoOponente = 0;
//sons do jogo
let raquetada;
let ponto;
let trilha;
function preload(){
trilha = loadSound('./sound/trilha.mp3');
ponto = loadSound('./sound/ponto.mp3');
raquetada = loadSound('./sound/raquetada.mp3');
};
function colisaoRaquete(x,y){
    let colidiu =    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

    if(colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
    };
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}
function setup() {
    createCanvas(600, 400);
    trilha.loop();
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
function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
      chanceDeErrar += 1
      if (chanceDeErrar >= 39){
      chanceDeErrar = 40
      }
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
      chanceDeErrar = 35
      }
    }
  }

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
    velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()
  }

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
    marcaPonto()
   };



