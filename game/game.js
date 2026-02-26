let coinSound;
let playerImage;
let coinImage;
let bgImage

function preload() {
  // You must upload files with these exact names to your sketch files
  soundFormats('wav');
  coinSound = loadSound('...game/coin.wav');
  playerImage = loadImage('...game/player.png');
  coinImage = loadImage('...game/coin.png');
  bgImage = loadImage('...game/background.png');
}


let player = {
  x: 50,
  y: 50,
  w: 30,
  h: 30,
  vx: 0, // Horizontal speed (Velocity X)
  vy: 0, // Vertical speed (Velocity Y)
  speed: 5, // How fast they walk
  jumpPower: -12, // How strong they jump (negative moves UP)
  isGrounded: false // Are they touching the floor?
};

let gravity = 0.6;

function setup() {
  createCanvas(600, 400);
}
  function applyPhysics() {
  // Gravity pulls down, increasing the Y speed
    player.vy += gravity;
  
  // Apply the speeds to the actual position
    player.x += player.vx;
    player.y += player.vy;
    // Create a floor
  platforms.push({ x: 0, y: 350, w: 600, h: 50 });
  // Create a floating platform
  platforms.push({ x: 200, y: 250, w: 100, h: 20 });
  // Add a coin
  coins.push({ x: 240, y: 210, size: 20, collected: false });
}

function handlePlayerInput() {
  player.vx = 0; // Stop moving sideways by default
  
  if (keyIsDown(LEFT_ARROW)) {
    player.vx = -player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.vx = player.speed;
  }
  
  // Jump only if touching the ground
  if (keyIsDown(UP_ARROW) && player.isGrounded === true) {
    player.vy = player.jumpPower; // Shoot upwards
    player.isGrounded = false; // We are in the air now
  }
}


let platforms = [];

// Put this inside setup():
// platforms.push({ x: 0, y: 350, w: 600, h: 50 });
// platforms.push({ x: 200, y: 250, w: 100, h: 20 });

function checkPlatformCollisions() {
  player.isGrounded = false; // Assume falling until we hit something
  
  for (let i = 0; i < platforms.length; i++) {
    let p = platforms[i];
    
    // Check if player's right side is past platform's left side, etc.
    if (player.x + player.w > p.x && 
        player.x < p.x + p.w && 
        player.y + player.h > p.y && 
        player.y < p.y + p.h) {
        
        // If we overlap AND we are falling downward
        if (player.vy > 0) {
          player.y = p.y - player.h; // Snap to the top of the platform
          player.vy = 0; // Stop falling
          player.isGrounded = true; // Allow jumping
        }
    }
  }
}


let coins = [];

// Put this inside setup():
// coins.push({ x: 240, y: 210, size: 20, collected: false });

function checkCoinCollections() {
  for (let i = 0; i < coins.length; i++) {
    let c = coins[i];
    
    if (c.collected === false) {
      // Find center point of player
      let playerCenterX = player.x + player.w / 2;
      let playerCenterY = player.y + player.h / 2;
      
      // Calculate distance
      let d = dist(playerCenterX, playerCenterY, c.x, c.y);
      
      // If distance is less than half their widths combined
      if (d < (player.w / 2 + c.size / 2)) {
        c.collected = true; // Make it disappear
        
      if (d < (player.w / 2 + c.size / 2)) {
        c.collected = true;
        coinSound.play(); // This triggers the wav file
        }
      }
    }
  }
}

function draw() {
  image(bgImage, 0, 0, width, height);

  handlePlayerInput();
  applyPhysics();
  checkPlatformCollisions();
  checkCoinCollections();

  // Draw the player
  image(playerImage, player.x, player.y, player.w, player.h);

  // Draw the platforms
  fill(100);
  for (let p of platforms) {
    rect(p.x, p.y, p.w, p.h);
  }

  // Draw the coins
  for (let c of coins) {
  if (!c.collected) {
    // Draw the image instead of the ellipse
    // (c.x - c.size/2) centers the image on the collision point
    image(coinImage, c.x - c.size/2, c.y - c.size/2, c.size, c.size);
  }
}
}
