var pathImg,path,boyImg,boy

function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.y = path.height / 2;
  path.velocityY = 4;
  path.scale = 1.2;
  
  boy = createSprite(180,340,30,30);
  boy.addAnimation("running",boy_running);
  boy.scale=0.1;
  
  leftboundary=createSprite(400,300,80,10);
  leftboundary.visible = false

  rightboundary = createSprite(0,300,80,10);
  rightboundary.visible = false;
}

function draw() {
  background(pathImg);

path.velocityY=4;

if(keyDown("RIGHT_ARROW")){
  boy.velocityX=10;
}
if(keyDown("LEFT_ARROW")){
  boy.velocityX=-10;
}
boy.collide(leftboundary);
boy.collide(rightboundary);

if(path.y > 400)
path.y = height/2;
drawSprites();
}
