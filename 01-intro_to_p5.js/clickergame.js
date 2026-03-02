// ----------------------------
// CLICKER GAME - FULL VERSION
// ----------------------------

// Target object
console.log("JS file is connected!");
let target = {
  x: 200,
  y: 200,
  radius: 40
};

let score = 0;
let timeLeft = 30;   // 30 second game
let gameOver = false;

function setup() {
  createCanvas(500, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(30, 30, 50);

  // Title
  fill(255);
  textSize(28);
  text("Click The Circle!", width / 2, 40);

  // Score
  textSize(20);
  text("Score: " + score, width / 2, 70);

  // Timer
  text("Time: " + timeLeft, width - 80, 40);

  // If game is over, show message
  if (gameOver) {
    fill(255, 100, 100);
    textSize(40);
    text("GAME OVER", width / 2, height / 2);
    textSize(24);
    text("Final Score: " + score, width / 2, height / 2 + 50);
    text("Click to Restart", width / 2, height / 2 + 90);
    return; // Stop drawing the target
  }

  // Draw target circle
  fill(100, 200, 255);
  ellipse(target.x, target.y, target.radius * 2);
}

// This runs ONCE every time the mouse is clicked
function mousePressed() {

  // If game over → restart
  if (gameOver) {
    score = 0;
    timeLeft = 30;
    gameOver = false;
    return;
  }

  // Calculate distance from mouse to target center
  let d = dist(mouseX, mouseY, target.x, target.y);

  // If clicked inside circle
  if (d < target.radius) {
    score++;

    // Move target to random location
    target.x = random(target.radius, width - target.radius);
    target.y = random(100, height - target.radius);
  }
}

// Countdown timer (runs once per second)
function keyPressed() {
  // Optional: press SPACE to start timer if you want manual start
}

setInterval(function() {
  if (!gameOver) {
    timeLeft--;
    if (timeLeft <= 0) {
      gameOver = true;
    }
  }
}, 1000);