let xCarro = 420;
let yCarro = 40;

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40)
};

function movimentaCarro(){
    
        xCarro = xCarro - 2;
        if(xCarro < -10){
            xCarro = 620;
            xCarro += 2;
        }
}