var fixedRect, movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

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

  gameObject1=createSprite(100, 100, 50, 50);   
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200, 100, 50, 50);   
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300, 100, 50, 50);   
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400, 100, 50, 50);   
  gameObject4.shapeColor="green";

  gameObject1.velocityX= +5;
  gameObject2.velocityX= +5;
  gameObject3.velocityX= +5;
  gameObject4.velocityX= +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 
  drawSprites();
}

function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object2.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
}