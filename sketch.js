
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,200);
  
  
  monkey = createSprite(50,150,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  
  FoodGroup= new Group();
  obstacleGroup = new Group();
  
  SurvivalTime = 0;
  
  
  invisibleGround = createSprite(0,200,1500,10);
  
  
  
  
}


function draw() {
  background("white")
  
  text ("SurvivalTime:" + SurvivalTime,500,50)
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(invisibleGround)
  
  //spawn the banana
  createBanana();
  
  //spawn the obstacles
  createObstacle();
  
  
  
  
  
  

  drawSprites();
} 
  
  function createBanana() {
    if (frameCount % 80 === 0){
   var banana = createSprite(600,100,40,10);
      banana.addImage(bananaImage)
      banana.scale = 0.1
      banana.velocityX= -3;
      banana.y = Math.round(random(30,100));
      
      banana.lifetime = 200;
      
      banana.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;
      
      FoodGroup.add(banana);
      
  }
  }

function createObstacle() {
  if (frameCount % 300 === 0){
    var obstacle1 = createSprite(600,160,10,10)
    obstacle1.addImage(obstacleImage);
    obstacle1.velocityX = -3;
    obstacle1.lifetime = 200;
    obstacle1.scale= 0.1
    obstacleGroup.add(obstacle1)
    
  
}
}

