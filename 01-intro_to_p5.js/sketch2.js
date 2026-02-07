
let radius = 50;
let x = 200;
let y = 200;
let speedX = 5;
let speedY = 5;

function setup() {
    //auto create width and heght
  createCanvas(600, 500);//create a canvas of 400x400 pixels
}

function draw() {
  background(40);
  //
  fill(0, 240, 255, 300); //set the fill color to red
  noStroke();
  ellipse(x, y,radius*2);
  
  x += speedX;
  y += speedY;
  if (x > width - radius || x < radius) {
    speedX = -speedX;
  }
  if (y > height - radius || y < radius) {
    speedY = -speedY;
  }
}
// ||==or