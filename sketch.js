var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers, player1, player2;
var bala, balaSprite, balaSpriteVol;
var espada;
var iron1, iron2, iron3;
var spider1, spider2, spider3;
var pistola, pistola1;
var player1;
var player2;
var rand1, rand2;
var hero = [];

function preload() {
  backgroundImage = loadImage("./assets/fondo.gif");
  bala = loadImage("./assets/bala.gif");
  iron1=loadImage("./assets/ironman1.gif");
  iron2=loadImage("./assets/ironman2.gif");
  iron3=loadImage("./assets/ironman3.gif");
  spider1=loadImage("./assets/spider1.gif");
  spider2=loadImage("./assets/spider2.gif");
  spider3=loadImage("./assets/spider3.gif");
  espada=loadImage("./assets/espada-removebg-preview - copia.png");
  espadaVol=loadImage("./assets/espada-removebg-preview.png");
  pistola=loadImage("./assets/pistola1-removebg-preview.png");
  pistolaVol=loadImage("./assets/5-removebg-preview.png")
  basuka=loadImage("./assets/pistola-removebg-preview.png");
  basukaVol=loadImage("./assets/Presentación1-removebg-preview.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
