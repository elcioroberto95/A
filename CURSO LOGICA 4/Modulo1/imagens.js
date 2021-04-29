function preload(){
    //loadImage é utilizado para carregar a imagem
    imagemDaEstrada = loadImage("Assets/imagens/estrada.png");
    imagemDoAtor = loadImage("Assets/imagens/ator-1.png");
    imagemCarro = loadImage("Assets/imagens/carro-1.png");
    imagemCarro2 = loadImage("Assets/imagens/carro-2.png");
    imagemCarro3 = loadImage("Assets/imagens/carro-3.png");
    imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
    somColisao = loadSound("Assets/sons/colidiu.mp3");
    somPontos = loadSound("Assets/sons/pontos.wav");
    somTrilha = loadSound("Assets/sons/trilha.mp3");
};