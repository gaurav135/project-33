





var s;
var  snowimg;
function setup() {
  createCanvas(800,400);
 Snow1 = new snow();
  
 // createSprite(400, 200, 50, 50);
}
function preload (){
  bg = loadImage("snow2.jpg");
  snowimg = loadImage("snow4.webp");
}

function draw() {
    background(bg);  
  drawSprites();
  Snow1.display();

}