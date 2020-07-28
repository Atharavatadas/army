var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,33);
  bullet = createSprite(50,200,30,30);
  wall = createSprite(1500,200,thickness,height/2);
  bullet.shapeColor = color("#ffffff")
  speed = random(223,321);
  weight = random(30,152);
  bullet.velocityX = speed;




}

function draw() {
  background("black"); 
 
  hascollided();
  drawSprites();
 }
 function hascollided() {
   if(bullet.isTouching(wall)) {
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage<100) {
       bullet.shapeColor = color(255,0,0);
     }
     if(damage>100) {
       bullet.shapeColor = color(0,255,0);
     }

   }

 }







