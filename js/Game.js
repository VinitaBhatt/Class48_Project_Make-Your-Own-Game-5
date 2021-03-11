class Game{
    constructor(){
        
    }

    play(){

        //console.log("In play state");
        textSize(30);
        fill("black");
        stroke("grey");
        strokeWeight(5);
        text(" * Life  :  " + gunManLife + " *", displayWidth/4, displayHeight/4-150);
        text("Press space to fire.... ", displayWidth/4, displayHeight/4-30);

        gunManObject = new GunMan();
        gunManObject.display();

        enemyObject = new Enemy();
        enemyObject.spawnEnemy();

        enemyObject.spawnEnemy2();

        fireObject = new Fire();
        
    }

    over(){
        gameOver.visible=true;
        textSize(30);
        fill("black");
        stroke("grey");
        strokeWeight(5);
        text("Press 'R' to Replay! ", displayWidth/2+70,displayHeight/4);
        //gunMan.y = gunMan.y+85;
        enemyGroup.destroyEach();
        enemy2Group.destroyEach();
        enemyFireGroup.destroyEach();
        back_sound.stop();
    }

    finish(){
        console.log("Game Finish");
        lockUp.visible = false;
        rescueBoy.y = rescueBoy.y+20;
        rescueBoy.collide(invisibleRoad);
        enemyGroup.destroyEach();
        enemy2Group.destroyEach();
        enemyFireGroup.destroyEach();
        gunMan.changeAnimation("GunMan_Running", gunManAnimation);
        gunMan.scale =0.7;
        gunMan.velocityY=0;
        gunMan.velocityX = 4;
        gunMan.depth = lockupBox.depth + 1;
        lock.depth = gunMan.depth - 1;
       
        if (gunMan.isTouching(lock)) {
            showMsg=true;
            rescueBoy.changeAnimation("boyRunning", rescueBoyAnimation);
            rescueBoy.velocityX = 4;
        }

        if(showMsg){
            textSize(30);
            fill("black");
            stroke("grey");
            strokeWeight(5);
            text("Barvo! You have rescued the Boy!", displayWidth/2,displayHeight/4);
            text("Press 'R' to Replay! ", displayWidth/2+100,displayHeight/4+50);
        }
    }


}