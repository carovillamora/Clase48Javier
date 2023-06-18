class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
  
    this.leadeboardTitle = createElement("h2");
  
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");

    this.armaPlayer1Assigned = false;
    this.armaPlayer2Assigned = false;
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    player1 = createSprite(width / 5 - 50, height - 110);
    player1.addImage("player1",spider1);
    player1.scale=0.7;

    player2 = createSprite(width / 5 + 900, height - 110);
    player2.addImage("player2",iron3);
    player2.scale = 0.7;
  
    hero = [player1, player2];

    this.armas();
    this.handlePlayerControls();
  }

  armas() {
    if (!this.armaPlayer1Assigned) {
      var armaPlayer1 = createSprite(width / 5 + 50, height - 70, 75, 75);
      armaPlayer1.scale = 0.3;
      rand1 = Math.round(random(1, 3));
      
      switch (rand1) {
        case 1:
          armaPlayer1.addImage(pistola);
          break;
        case 2:
          armaPlayer1.addImage(espada);
          break;
        case 3:
          armaPlayer1.addImage(basuka);
          break;
      }
      this.armaPlayer1Assigned = true;
     
      balaSprite = createSprite(530, 610, 75, 75);
      balaSprite.addImage(bala);
      balaSprite.scale = 0.1;
      balaSprite.visible = false;
    }
  
    if (!this.armaPlayer2Assigned) {
      var armaPlayer2 = createSprite(width / 5 + 800, height - 130, 25, 25);
      armaPlayer2.scale = 0.3;
      rand2 = Math.round(random(4, 6));
      switch (rand2) {
        case 4:
          armaPlayer2.addImage(pistolaVol);
          
          break;
        case 5:
          armaPlayer2.addImage(espadaVol);
          
          break;
        case 6:
          armaPlayer2.addImage(basukaVol);
          basukaVol.scale=0.5;
          break;
      }
      this.armaPlayer2Assigned = true;
  
      balaSpriteVol = createSprite(1120, 550, 25, 25);
      balaSpriteVol.addImage(bala);
      balaSpriteVol.scale = 0.1;
      balaSpriteVol.visible = false;
    }
  }

  handleElements() {
    form.hide();

    this.resetTitle.html("Reiniciar juego");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);
  
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
  
    this.leadeboardTitle.html("Puntuación");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 40);
  
    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 80);
  
    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);
  }

  play() {
    this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {

      drawSprites();
    }
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
      });
      window.location.reload();
    });
  }

  handlePlayerControls() {
    if ((rand1 == 1 || rand1 == 3) && keyDown("e")){
      balaSprite.visible =true;
      balaSprite.velocityX = 2;
    }
    
    if ((rand2 == 4 || rand2 == 6) && keyDown("r")){
      balaSpriteVol.visible =true;
      balaSpriteVol.velocityX = -2;
    }
}
}
