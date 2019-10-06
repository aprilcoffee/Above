let backGroundColorTop;
let backGroundColorDown;
let backGroundColorGradient;
let _text;

function setup() {
	const canvasElt = createCanvas(400,600,WEBGL).elt;
	canvasElt.style.width='100%', canvasElt.style.height='100%';
	//	createCanvas(displayWidth, displayHeight, WEBGL);
  	backGroundColorTop = loadImage("img/oceanAbove.jpg");
  	backGroundColorDown = loadImage("img/oceanBelow.jpg");
  	backGroundColorGradient = loadImage("img/oceanBackground.jpg");
	textFont('Source Code Pro');
	textSize(100);
}

function draw() {
	background(0);
	fill(0,0,0,0);
	let angleX = map(mouseX,0,displayWidth,-179,179);
	let angleZ = map(mouseY,0,displayHeight,-45,45);
	angleZ = pRotationX;
	let camY = sin(radians(angleZ));
	let camZ = cos(radians(angleZ));
	camera(0, 0, 0, 0, camY,camZ, 0, 1, 0);

	//camera(0, 0,0, 0, camY,camZ, 0, 1, 0);
    textFont('Source Code Pro');
	textSize(100);
	fill(255);
	text(pRotationX,0,0);

  //drawingBackground();
	texture(backGroundColorGradient);
	textureMode(NORMAL);
	noStroke();
	translate(500,0);
	//console.log();
	sphere(1000); 
	//camera(0, 0, 20 + sin(fr0, 0, 0, 0, 0, 1, 0);
     //camera(mouseX,mouseY)
  //push();
  //texture(backGroundColorGradient)
  //textureMode(NORMAL);
  // Assuming img has 100 pixels width and height
  

  

  //ellipse(400,400,100,100);
}
function drawingBackground(){
  texture(backGroundColorGradient);
  textureMode(NORMAL);
  beginShape();
  vertex(-displayWidth*2, -displayHeight*2, -100, 0, 0);
  vertex(displayWidth*2, -displayHeight*2, -100, 1, 0);
  vertex(displayWidth*2, displayHeight*2, -100, 1,1);
  vertex(-displayWidth*2, displayHeight*2, -100, 0, 1);
  endShape(CLOSE);

  beginShape();
  vertex(-displayWidth*2, -displayHeight*2, 100, 0, 0);
  vertex(displayWidth*2, -displayHeight*2, 100, 1, 0);
  vertex(displayWidth*2, displayHeight*2, 100, 1,1);
  vertex(-displayWidth*2, displayHeight*2, 100, 0, 1);
  endShape(CLOSE);

  beginShape();
  vertex(-displayWidth*2, -displayHeight*2, -100, 0, 0);
  vertex(displayWidth*2, -displayHeight*2, -100, 1, 0);
  vertex(displayWidth*2, displayHeight*2, -100, 1,1);
  vertex(-displayWidth*2, displayHeight*2, -100, 0, 1);
  endShape(CLOSE);

  beginShape();
  vertex(-displayWidth*2, -displayHeight*2, -100, 0, 0);
  vertex(displayWidth*2, -displayHeight*2, -100, 1, 0);
  vertex(displayWidth*2, displayHeight*2, -100, 1,1);
  vertex(-displayWidth*2, displayHeight*2, -100, 0, 1);
  endShape(CLOSE);


}
