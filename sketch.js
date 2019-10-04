function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}
function draw() {
  background(204);
  //move the camera away from the plane by a sin wave
  camera(mouseX, mouseY, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  plane(100, 100);
}