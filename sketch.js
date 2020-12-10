  var player,player_running;

  var obstacle,obstacle_img;

  var banana,bananaImg;

  var background1,backImg;

  var score = 0;

  var FoodGroup, obstacleGroup;

  
  

function preload(){
  
  backImg = loadImage("jungle.jpg");
  
   player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg = loadImage("banana.png");  
  
  obstacle_img = loadImage("stone.png");
  
 
}



function setup() {
  
  createCanvas(600, 600);
  
  background1 = createSprite(0,0,600,600);
  background1.scale = 2.5
  background1.addImage(backImg)
  
  player = createSprite(80,500);
  player.addAnimation("moving",player_running);
  player.scale = 0.13;
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
  
  edges = createEdgeSprites();
  
}


function draw() {
  
  background1.velocityX = -2;
  
  if(background1.x<0) 
  { 
    background1.x=background1.width/2; 
  }
    
  if(keyDown("space")){
    player.velocityY = -10;
  }  
  player.velocityY = player.velocityY + 0.5;   
  player.collide(edges[3]);
  
  spawnfood();
  spawnObstacles();         
  
drawSprites(); 
  
  stroke("white"); 
  textSize(20); 
  fill("blue"); 
  text("Score: "+ score, 300,50);
  
  if(player.isTouching(FoodGroup)){
    
    score = score+2;
    FoodGroup.destroyEach();     
     
     }
  
  if(player.isTouching(obstacleGroup)){
        
         player.scale = 0.09;
         
         }
  
  switch(score){
      
    case 10:player.scale=0.15
      break;
    case 20:player.scale=0.17
      break;
    case 30:player.scale=0.19
      break;
    case 40:player.scale=0.21
      break;
      
      
      
      
 }
  
  
  
}

function spawnfood(){
  
  if (frameCount % 80 === 0)
  { 
    banana = createSprite(600,400,40,10);
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.addImage(bananaImg);
    banana.lifetime = 300; 
    player.depth = banana.depth + 1;
    banana.scale=0.04;
    FoodGroup.add(banana);
  } 
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0) 
  { 
    obstacle = createSprite(800,560,10,40);
    obstacle.velocityX = -6; 
    obstacle.addImage(obstacle_img);
    obstacle.scale=0.15;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}
