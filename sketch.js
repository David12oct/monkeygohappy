var monkeyi
var monkey
var bananai
var banana
var bananag
var obstacleg
var goi
var gameover
var ground
var obstaclei
var gamestate="play"
var obstacle
var score
var backgroundi
function preload(){
  monkeyi=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananai=loadImage("banana.png")
  obstaclei=loadImage("obstacle.png")
  backgroundi=loadImage("jungle2.jpg")
  goi=loadImage("gameover.jpg")
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(50,500,10,10)
  monkey.addAnimation("monkey",monkeyi)
  monkey.scale=0.2
  ground=createSprite(300,560,600,10)
ground.visible=false
obstacleg=createGroup()

  bananag=createGroup()
  score=0
  gameover=createSprite(300,250,10,10)
  gameover.addImage("gameover",goi)
  gameover.scale=0.2
}

function draw() {
  background(backgroundi)
  if(gamestate=="play"){
    if(keyDown("space")){
    monkey.velocityY=-6
    
  }
    
  monkey.velocityY=monkey.velocityY+1
    pb()
     po()
    if(monkey.isTouching(bananag)){
    bananag.destroyEach()
    score=score+1
    
  }
    if(monkey.isTouching(obstacleg)){
     gamestate="end"
    
    }
    gameover.visible=false
  }
  if(gamestate=="end"){
    obstacleg.setVelocityXEach(0)
      bananag.setVelocityXEach(0)
    gameover.visible=true
  }
  
  
monkey.collide(ground)
  
 
  textSize(20)
  text("score="+score,500,20)
  
    
  drawSprites()
  
}
function pb(){
  if(frameCount%60==0){
    banana=createSprite(550,20,10,10)
  banana.addImage("banana",bananai)
  banana.scale=0.2
  banana.velocityX=-6
  banana.y=random(0,300)
    bananag.add(banana)
  }
 
}
function po(){
  if(frameCount%60==0){
    obstacle=createSprite(550,500,10,10)
  obstacle.addImage("banana",obstaclei)
  obstacle.scale=0.2
  obstacle.velocityX=-6
 obstacleg.add(obstacle)
  }
 
}