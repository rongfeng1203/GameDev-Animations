
let radius = 50;
let x = 200;
let y = 200;
let speedX = 2;
let speedY = 2;
let r=208;
let g=0;
let b=120;
function setup() {
    //auto create width and heght
  createCanvas(600, 500);//create a canvas of 400x400 pixels
}

function draw() {
  background(40);
  //
  fill(r, g, b); //set the fill color to red
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

//manual click detection

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    r = random(255);
    g = random(255);
    b = random(255);
    speedX = -speedX;
    speedY = -speedY;
  }
}

