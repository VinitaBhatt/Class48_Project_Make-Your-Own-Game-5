class GunMan{
    constructor(){
        

    }

    display(){
      console.log("Gun man display");
        gunMan.collide(invisibleRoad);
        camera.position.x = gunMan.x+550;

        if (bg.x < 0) {
            bg.x = bg.width / 2;
        }
         
        if (keyWentDown("right") && !keyDown("down")) {
            bg.velocityX = -3;
            gunMan.changeAnimation("GunMan_Running", gunManAnimation);
            gunMan.x = gunMan.x + 6;
          }
      
          if (keyWentUp("right") && !keyDown("down")) {
            bg.velocityX = 0;
            gunMan.changeAnimation("gunManStanding", gunManStandingAnimation);
          }

          if (keyDown("left")) {
            gunMan.x = gunMan.x - 6;
          }

          if (keyDown("up") && gameState !== "finish" && gunMan.y> displayHeight/2) {
            gunMan.velocityY = -12;
          }

          if (keyWentDown("down") && !keyDown("right") && !keyDown("up")) {
            gunMan.changeAnimation("GunMan_Sitting", gunManSittingAnimation);
            gunMan.scale = 0.5;
            gunMan.y = gunMan.y + 40;
            bg.velocityX = 0;
            //bulletGroup.setMirrorYEach(+1);
          }
          if (keyWentUp("down")) {
            gunMan.changeAnimation("gunManStanding", gunManStandingAnimation);
            gunMan.scale = 0.7;
            gunMan.y = gunMan.y - 40;
          }

          gunMan.velocityY = gunMan.velocityY + 0.8;

          if (keyDown("space")) {
            fireObject.gunManFiring();
          }

          if ((gunMan.isTouching(enemyFireGroup) || gunMan.isTouching(enemyGroup) || gunMan.isTouching(enemy2Group)) && gunManLife > 0) {
            gunMan.tint ="red";
            shot_sound.play();
           
            setTimeout(() => {gunMan.tint="white";}, 1500);
            gunManLife = gunManLife - 1;
            enemyFireGroup.destroyEach();

            if(gunMan.isTouching(enemyGroup)){
              enemyGroup.destroyEach();
            }else if(gunMan.isTouching(enemy2Group)){
              enemy2Group.destroyEach();
            }

            if(gunManLife === 0){
              shot_dead_sound.play();
              gunMan.changeAnimation("GunMan_Killed",gunManKilledAnimation);
              gameState = "over";
            }
          }
          
    }
}