let coinSound, playerImage, bgImage, coinImage;
let platforms = [];
let coins = [];
let score = 0; // Track the points
let gravity = 0.6;

let player = {
  x: 50, y: 50, w: 30, h: 30,
  vx: 0, vy: 0, speed: 5,
  jumpPower: -12, isGrounded: false
};

function preload() {
  soundFormats('wav');
  coinSound = loadSound('coin.wav');
  playerImage = loadImage('player.png');
  bgImage = loadImage('background.png');
  coinImage = loadImage('coin.png');
}

function setup() {
  createCanvas(600, 400);
  
  // 1. Generate Random Platforms
  // We'll make 5 random platforms
  for (let i = 0; i < 5; i++) {
    platforms.push({
      x: random(0, width - 100),
      y: random(100, height - 50),
      w: random(80, 150),
      h: 20
    });
  }
  // Always add one floor so the player doesn't fall forever
  platforms.push({ x: 0, y: height - 20, w: width, h: 20 });

  // 2. Generate Random Coins
  for (let i = 0; i < 8; i++) {
    coins.push({
      x: random(50, width - 50),
      y: random(50, height - 100),
      size: 25,
      collected: false
    });
  }
  function spawnLevel() {
  // Clear existing objects
  platforms = [];
  coins = [];

  // Create random platforms
  for (let i = 0; i < 5; i++) {
    platforms.push({
      x: random(0, width - 100),
      y: random(100, height - 80), // Keep them reachable
      w: random(80, 150),
      h: 20
    });
  }
}
}
  
  // Add a floor so you don't fall forever
  platforms.push({ x: 0, y: height - 20, w: width, h: 20 });

  // Create random coins
  for (let i = 0; i < 8; i++) {
    coins.push({
      x: random(50, width - 50),
      y: random(50, height - 100),
      size: 25,
      collected: false
    });
  }
  function spawnLevel() {
  // Clear existing objects
  platforms = [];
  coins = [];

  // Create random platforms
  for (let i = 0; i < 5; i++) {
    platforms.push({
      x: random(0, width - 100),
      y: random(100, height - 80), // Keep them reachable
      w: random(80, 150),
      h: 20
    });
  }
  
  // Add a floor so you don't fall forever
  platforms.push({ x: 0, y: height - 20, w: width, h: 20 });

  // Create random coins
  for (let i = 0; i < 8; i++) {
    coins.push({
      x: random(50, width - 50),
      y: random(50, height - 100),
      size: 25,
      collected: false
    });
  }
}

function draw() {
  image(bgImage, 0, 0, width, height);

  handlePlayerInput();
  applyPhysics();
  checkPlatformCollisions();
  checkCoinCollections();

  // Draw Player
  image(playerImage, player.x, player.y, player.w, player.h);

  // Draw Platforms
  fill(100);
  noStroke();
  for (let p of platforms) {
    rect(p.x, p.y, p.w, p.h);
  }

  // Draw Coins using image
  for (let c of coins) {
    if (!c.collected) {
      image(coinImage, c.x - c.size/2, c.y - c.size/2, c.size, c.size);
    }
  }

  // 3. Display Score with Courier New
  fill(255); // White text
  textSize(24);
  textFont('Courier New'); 
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
}

// Update the coin logic to increase score
function checkCoinCollections() {
  for (let c of coins) {
    if (!c.collected) {
      let d = dist(player.x + player.w/2, player.y + player.h/2, c.x, c.y);
      if (d < (player.w/2 + c.size/2)) {
        c.collected = true;
        score += 10; // Increase score!
        coinSound.play();
      }
    }
  }
}

// Logic for input, physics, and collisions remains the same...
function handlePlayerInput() {
  player.vx = 0;
  if (keyIsDown(LEFT_ARROW)) player.vx = -player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.vx = player.speed;
  if (keyIsDown(UP_ARROW) && player.isGrounded) {
    player.vy = player.jumpPower;
    player.isGrounded = false;
  }
}

function applyPhysics() {
  player.vy += gravity;
  player.x += player.vx;
  player.y += player.vy;
}

function checkPlatformCollisions() {
  player.isGrounded = false;
  for (let p of platforms) {
    if (player.x + player.w > p.x && player.x < p.x + p.w && 
        player.y + player.h > p.y && player.y < p.y + p.h) {
        if (player.vy > 0) {
          player.y = p.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
        }
    }
  }
}

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }
}