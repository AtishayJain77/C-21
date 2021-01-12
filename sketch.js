var fixedRect, movingRect;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  // actual values in the function call
  // movung rect will become object and fixed rect will become object 2
  
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

