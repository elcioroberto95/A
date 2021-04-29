let yAtor = 400;
var xAtor = 90;
var meusPontos = 0;
console.log(yAtor);
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
};

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        if(yAtor > 10){
            yAtor -=3;
        }
          }
    else if(keyIsDown(DOWN_ARROW)){
            if(yAtor < 390){
                yAtor +=3;
            }
         }
    else if(keyIsDown(LEFT_ARROW)){
       if(xAtor > 2){
        xAtor-=3;
       }
         }
    else if(keyIsDown(RIGHT_ARROW)){
       if(xAtor < 470){
        xAtor+=3;
       }
         }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (colisao){
            somColisao.play();
          colidiu();
        }
    
}
}
function colidiu(){
    yAtor = 400;
    pontosMaiorQueZero(meusPontos);

}
function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,0))
    text(meusPontos,width/5,30);
};
function marcarPontos(){
    if(yAtor < 15){
        meusPontos++;
        yAtor = 390;
        somPontos.play();
    };
};
function pontosMaiorQueZero(pontos){
    var maiorOuMenorQueZero= pontos > 0;
   if(maiorOuMenorQueZero){
       meusPontos -= 1;
   };
}