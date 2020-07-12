function setup() {
  createCanvas(800,400);
  fixrect= createSprite(400, 200, 50, 50);
  movingrect=createSprite(40,70,30,30);
  rect1=createSprite(50,100,50,50);
  rect2=createSprite(750,100,50,50);
  rect1.velocityX=4;
  rect2.velocityX=-4;
  rect1.shapeColor="purple";
  rect2.shapeColor="blue";
  rect3=createSprite(400,300,50,50);
  rect4=createSprite(600,300,50,50);
  rect5=createSprite(50,50,50,50);
  rect6=createSprite(50,350,50,50);
  rect5.velocityY=4;
  rect6.velocityY=-4;
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(isTouching(rect3, movingrect)){
    rect3.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    rect3.shapeColor="green";
    movingrect.shapeColor="green";
  }

 bounceOff(rect1, rect2);
 bounceOff(rect5, rect6);

  drawSprites();
  
}
