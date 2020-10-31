function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,60,30)
  movablerect=createSprite(200,150,30,60);
}

function draw() {
  background(55,255,255);
  movablerect.x=World.mouseX
  movablerect.y=World.mouseY 
  
  if(movablerect.x-fixedrect.x < movablerect.width/2+fixedrect.width/2 && 
    fixedrect.x-movablerect.x<movablerect.width/2+fixedrect.width/2 && 
    movablerect.y-fixedrect.y < movablerect.height/2+fixedrect.height/2 && 
    fixedrect.y-movablerect.y<movablerect.height/2+fixedrect.height/2){

    movablerect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movablerect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}