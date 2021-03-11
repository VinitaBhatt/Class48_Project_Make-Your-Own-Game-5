var bg, bgImage;
var game;
var gunMan,gunManStandingAnimation, gunManAnimation, gunManSittingAnimation, gunManKilledAnimation;
var gameState="play";
var gunManObject,enemyObject,fireObject;
var enemyAnimation, enemy, enemyImage, enemyGroup;
var enemy2Animation, enemy2, enemy2Group;
var enemyCount;
var enemyBulletImage;
var bulletImage, bulletGroup;
var gunManLife = 3;
var firing_sound,shot_sound,shot_dead_sound,back_sound;
var gameOver, gameOverImage;
var lockUp, lockUpImage, lockupBox, lockupBoxImage;
var rescueBoy, rescueBoyStandingAnimation, rescueBoyAnimation;
var lockClosedAnimation, lockOpenAnimation;
var showMsg=false;

function preload(){
   bgImage = loadImage("images/City_BG2.jpg");
   gunManStandingAnimation = loadAnimation("images/gunMan_stand.png");
   gunManAnimation = loadAnimation("images/GM1T.png", "images/GM2T.png", "images/GM5T.png", "images/GM6T.png", "images/GM1T.png");
   gunManSittingAnimation = loadAnimation("images/gunMan_sit2.png");
   gunManKilledAnimation = loadAnimation("images/gunMan_killed4.png");
   enemyAnimation = loadAnimation("images/enemy1.png", "images/enemy2.png", "images/enemy3.png", "images/enemy4.png", "images/enemy5.png");
   enemy2Animation = loadAnimation("images/enm1.png", "images/enm2.png", "images/enm3.png", "images/enm4.png");
   enemyImage = loadImage("images/enemy1.png");
   enemyBulletImage = loadImage("images/normal bullet.png");
   bulletImage = loadImage("images/gunManBullet.png");
   gameOverImage = loadImage("images/gameOver2.png");
   lockUpImage = loadImage("images/lockup1.png");
  rescueBoyStandingAnimation = loadAnimation("images/rescueBoy.png");
  lockClosedAnimation = loadAnimation("images/lock-1.png");
  lockOpenAnimation = loadAnimation("images/lock-2.png");
  lockupBoxImage = loadImage("images/lockup-box.png");
  rescueBoyAnimation = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png");
   firing_sound = loadSound("sounds/fire_sound.mp3");
   shot_sound = loadSound("sounds/shot_sound.mp3");
   shot_dead_sound = loadSound("sounds/shot_dead_sound.mp3");
   back_sound = loadSound("sounds/back-music.mp3");
}


function setup(){

  createCanvas(displayWidth, displayHeight-150);
  bg = createSprite(displayWidth/2, displayHeight/2-80);
  bg.addImage(bgImage);
  bg.scale = 0.95;

  game = new Game();

  gunMan = createSprite(displayWidth/4, displayHeight/4);
  gunMan.addAnimation("gunManStanding", gunManStandingAnimation);
  gunMan.addAnimation("GunMan_Running", gunManAnimation);
  gunMan.addAnimation("GunMan_Sitting", gunManSittingAnimation);
  gunMan.addAnimation("GunMan_Killed",gunManKilledAnimation);
  gunMan.scale = 0.7;
  gunMan.debug=false;

  invisibleRoad = createSprite(bg.width / 2, displayHeight-150, bg.width, 20);
  invisibleRoad.visible = false;

  bulletGroup = new Group();
  enemyGroup = new Group();
  enemy2Group = new Group();
  enemyFireGroup = new Group();

  gameOver = createSprite(displayWidth/2+200,displayHeight/2-100);
  gameOver.addImage(gameOverImage);
  gameOver.scale =0.3;
  gameOver.visible=false;

  lockupBox = createSprite(displayWidth/2+200, displayHeight/1.6); //680
  lockupBox.addImage(lockupBoxImage);
  lockupBox.scale = 0.5;
  lockupBox.visible = false;

  rescueBoy = createSprite(displayWidth/2+180, displayHeight/1.6);//660
  rescueBoy.addAnimation("boyStanding", rescueBoyStandingAnimation);
  rescueBoy.addAnimation("boyRunning", rescueBoyAnimation);
  rescueBoy.scale = 0.5;
  rescueBoy.visible = false;

  lockUp = createSprite(displayWidth/2+175, displayHeight/1.6);//655,380
  lockUp.addImage(lockUpImage);
  lockUp.scale = 0.35;
  //lockUp.debug=true;
  lockUp.visible = false;

  lock = createSprite(displayWidth/2+150, displayHeight/1.6-25);
  lock.addAnimation("lock-closed", lockClosedAnimation);
  lock.addAnimation("lock-open", lockOpenAnimation);
  lock.scale = 0.3;
  //lock.debug = true;
  lock.visible = false;


  enemyCount=0;

  back_sound.loop();
  
}

function draw(){

    drawSprites();
    if(gameState === "play"){
      game.play();
    }

    else if(gameState === "over"){
      game.over();
    }

    else if (gameState === "finish") {
      game.finish();
    }

   if(keyDown('r')&& (gameState === "finish" || gameState === "over")){
      location.reload();
    }
    
}