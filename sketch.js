var movingR,fixedR;

function setup() {
  createCanvas(1200,800);
  movingR=createSprite(400, 200, 50, 50);
  movingR.shapeColor="red";
  
  fixedR=createSprite(500,400,50,50);
  fixedR.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  movingR.x=World.mouseX;
  movingR.y=World.mouseY; 

  if(movingR.x-fixedR.x===fixedR.width/2+movingR.width/2){
  movingR.shapeColor="green";
  fixedR.shapeColor="green"
  }
  else{
  movingR.shapeColor="red";
  fixedR.shapeColor="red";
  }
  drawSprites();
}