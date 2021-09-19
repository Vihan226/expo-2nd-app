var Rightplayer,Platform, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet;
var RightplayerImage,PlatformImage, GreenenemyImage, BigblockImage, SmallblockImage, RedenemyImage, PlayerbulletImage, EnemybulletImage;
var allow;
var gameState=null;
var Jump;
var Coins, Alive
function preload(){

  Background= loadImage("Background.png")
  RightplayerImage= loadImage("Rightplayer.png")
  GreenenemyImage= loadImage("Greenenemy.png")
  BigblockImage= loadImage("Bigblock.png")
  SmallblockImage= loadImage("Smallblock.png")
  RedenemyImage= loadImage("Redenemy.png")
  PlayerbulletImage= loadImage("Playerbullet.png")
  EnemybulletImage= loadImage("Enemybullet.png")
  PlatformImage= loadImage("Platform.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

 

  allow= createButton("Agree And Continue to Play")
  allow.position(width/1.15-width/2,height/2+50)
  allow.size(200,100)

  Jump= createButton("Jump")
  Jump.position(width/1.3-width/2,height/2+200)
  Jump.size(100,200)
  Jump.hide()

Platform = createSprite(width/1-width/2, height/2+3248)
Platform.addImage("platformImg", PlatformImage)
Platform.scale=50
Platform.visible=false

Rightplayer=createSprite(width/1.1-width/2, height/2+280)
Rightplayer.addImage("rplayer", RightplayerImage)
RightplayerImage.scale=1
Rightplayer.visible=false
 

  
}

function draw() {
  background("white");



  if (frameCount %500 === 0) {
    Bigblock=createSprite(width/.6-width/2,height/2);
    Bigblock.addImage("bblock",BigblockImage)
  //e6.scale=.18
  Bigblock.scale=1
  Bigblock.visible=false
  Bigblock.velocityX=-10
  Bigblock.y=Math.round(random(height/2+250,height/2+400))
  Bigblock.lifetime=2000
  }

  if (frameCount %70 === 0) {
    Smallblock=createSprite(width/.6-width/2,height/2);
    Smallblock.addImage("sblock",SmallblockImage)
  //e6.scale=.18
  Smallblock.scale=.8
  Smallblock.visible=false
  Smallblock.velocityX=-10
  Smallblock.y=Math.round(random(height/2+300,height/2+350))
  Smallblock.lifetime=2000
  }

  // this is question 1 from the game
  Platform.velocityX=0
  Platform.velocityY=0

  textSize(30)
fill("red")
  text(" Shooting Dungeon- Made By Vihan Seth",width/1.25-width/2,height/2-200)
  
  textSize(20)
  fill("black")
  text("For policies this is an official game built by Vihan Seth", width/1.25-width/2, height/2-170)
  text("with a web viewer. This includes shooting, and it is built for 3+ ages.", width/1.25-width/2, height/2-140)

  allow.mousePressed(()=>{
gameState="game"
  })





  if(gameState==="game"){
    background(Background)

    
    allow.hide()

    Platform.visible=true
    Rightplayer.visible=true
    Bigblock.visible=true
    Smallblock.visible=true
    Jump.show()

    Bigblock.velocityX=-10
    Smallblock.velocitY=-10
    Platform.velocityX=-5
    Platform.velocityY=0

    
    // if statements or statemtns for if to work with them

    
  Jump.mousePressed(()=>{
    Rightplayer.velocityY=-6
   
    
      })
      Rightplayer.velocityY=Rightplayer.velocityY+.3;

    Rightplayer.collide(Platform)

     
  }
  
 drawSprites();
    
}



  