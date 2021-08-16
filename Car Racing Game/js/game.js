class Game {
    constructor(){

    }

    getState(){
        var ref = database.ref("gameState")
        ref.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide()
        var displayPosition = 130;
        text("Game Start", 120,100);
        Player.getPlayersInfo()
        if(allPlayers !== undefined){
            var x = 0
            var y = 0
            var index = 0
            for(var plr in allPlayers){
                index = index+1
                x = x+200
                y = displayHeight-allPlayers[plr].distance
                cars[index-1].position.x = x
                cars[index-1].position.y =y 
                if(index===player.index){
                    cars[index-1].shapeColor="red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].position.y
                }
                /*textSize(15)
                displayPosition+=20*/
                /*if(plr === "player"+player.index){
                    fill("red")
                }
                else{fill("black")}*/
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
        drawSprites()
    }
}