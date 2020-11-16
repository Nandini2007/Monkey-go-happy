
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var foodGrp, obsGrp
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(400,300);
    monkey = createSprite(50,220,20,20);
 monkey.addAnimation("xc",monkey_running);
  monkey.scale = 0.1

  ground = createSprite(200,252,400,5);
foodGrp = new Group();
obsGrp = new Group();
}


function draw() {
  background("white");

monkey.collide(ground);
  if(keyDown("space")&& monkey.y >= 170) {
        monkey.velocityY = -12;
    }
    
  
    monkey.velocityY = monkey.velocityY +0.5;
  spawnFood();
  spawnObs();
  score = Math.ceil(frameCount/frameRate());
  drawSprites();
  text("survival Time : "+score,300,20);
}
function spawnFood(){
  if(frameCount%100 === 0){
  food = createSprite(400,200,200,200);
  food.addImage(bananaImage);
    food.depth = 0;  
  
  food.y = Math.round(random(10,150));
    food.scale = 0.09;
    food.velocityX = -3;
    foodGrp.add(food);
    foodGrp.setLifetimeEach("190");
  }
  
}
function spawnObs(){
  if(frameCount%300 === 0){
  obs = createSprite(200,232,40,40);
  obs.addImage(obstacleImage);
    obs.scale = 0.1;
    obs.velocityX = -3;
    obsGrp.add(obs);
  }
                 
}





