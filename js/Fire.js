class Fire{
    constructor(){

    }

    gunManFiring(){
        if (frameCount % 5 === 0) {
            var bullet = createSprite(gunMan.x + 60, gunMan.y - 17);
            bullet.velocityX = 6;
            //bullet.debug=true;
            bullet.scale = 0.15;
            bullet.lifetime = displayWidth;
            bullet.addImage(bulletImage);
            bulletGroup.add(bullet);
            firing_sound.play();
        }

        console.log("enemyGroup :"+ enemyGroup.length );
        for(var j=0; j<bulletGroup.length;j++){
            for(var i=0; i<enemyGroup.length;i++){
                if (bulletGroup.get(j).isTouching(enemyGroup.get(i))) {
                    //.log("Enemy "+ enemyGroup.get(i)); 
                    enemyGroup.get(i).destroy();
                    bulletGroup.get(j).destroy();
                }
            }
        }

        for(var j=0; j<bulletGroup.length;j++){
            for(var i=0; i<enemy2Group.length;i++){
                if (bulletGroup.get(j).isTouching(enemy2Group.get(i))) {
                    //console.log("Enemy2"+ enemy2Group.get(i)); 
                    enemy2Group.get(i).destroy();
                    bulletGroup.get(j).destroy();
                }
            }
        }


       
            if (bulletGroup.isTouching(lock)) {
                if(lock.visible === true){
                    lock.changeAnimation("lock-open", lockOpenAnimation);
                    lock.y = lock.y + 70;
                    lockUp.visible = false;
                    gunMan.velocityY=0;
                    gunMan.collide(invisibleRoad);
                    bulletGroup.destroyEach();
                    gameState = "finish";
                }
            }
        
        
            
           
        
    }
}