let yAtor = 400;
var xAtor = 150;
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
};

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

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (colisao){
          colidiu();
        }
    
}
}
function colidiu(){
    yAtor = 400;
}