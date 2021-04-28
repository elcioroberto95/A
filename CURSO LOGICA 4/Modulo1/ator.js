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