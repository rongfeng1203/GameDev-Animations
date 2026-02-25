let target = {
  x: 200,
  y: 200,
  radius: 40
};

let score = 0;
function mousePressed() {
  // This code only runs exactly when a click happens
  
  // Calculate distance between mouse click and target center
  let d = dist(mouseX, mouseY, target.x, target.y);
  
  // If the distance is smaller than the radius, the click was inside the circle!
  if (d < target.radius) {
    score++; // Add a point
    
    // Jump the target to a new random location
    target.x = random(target.radius, width - target.radius);
    target.y = random(100, height - target.radius);
  }
}
