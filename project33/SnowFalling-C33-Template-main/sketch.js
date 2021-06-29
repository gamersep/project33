var bg,snowimage
function preload(){
  bg=loadImage("snow3.jpg")
  snowImage=loadImage("snow5.webp")
}
function setup() {
  createCanvas(1000,400);
  snow1=createSprite(400, 100, 50, 50);
  snow1.addImage(snowImage)
  snow1.scale=0.1
  snow2=createSprite(50, 50, 50, 50);
  snow2.addImage(snowImage)
  snow2.scale=0.1
  snow3=createSprite(300, 60, 50, 50);
  snow3.addImage(snowImage)
  snow3.scale=0.1
  snow4=createSprite(450, 30, 50, 50);
  snow4.addImage(snowImage)
  snow4.scale=0.1
  snow5=createSprite(150, 100, 50, 50);
  snow5.addImage(snowImage)
  snow5.scale=0.1
  snow6=createSprite(500, 100, 50, 50);
  snow6.addImage(snowImage)
  snow6.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
}