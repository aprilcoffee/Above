let backGroundColorTop;
let backGroundColorDown;
let backGroundColorGradient;


function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  backGroundColorTop = loadImage("img/oceanAbove.jpg");
  backGroundColorDown = loadImage("img/oceanBelow.jpg");
  backGroundColorGradient = loadImage("img/oceanBackground.jpg");

}

function draw() {
  background(0);
  fill(0,0,0,0); 

  //push();
  //texture(backGroundColorGradient)
  //textureMode(NORMAL);

  // Assuming img has 100 pixels width and height
  
  
  texture(backGroundColorGradient);
  textureMode(NORMAL);
  beginShape();
  vertex(0, 0, -100, 0, 0);
  vertex(100, 0, -100, 1200, 0);
  vertex(100, 100, -100, 1000,1000);
  vertex(0, 100, -100, 0, 1200);
  endShape(CLOSE);

  //ellipse(400,400,100,100);
}