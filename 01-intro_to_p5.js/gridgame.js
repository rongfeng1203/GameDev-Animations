let cols = 10;
let rows = 10;
let cellSize = 40;
let grid = [];

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  
  // Stop the browser from showing a menu when we right click
  document.oncontextmenu = function() { return false; };
  
  for (let c = 0; c < cols; c++) {
    grid[c] = []; // Make an empty array for this column
    for (let r = 0; r < rows; r++) {
      
      // 10% chance to be a mine
      let isMine = random(1) < 0.1; 
      
      // Save all the data for this specific cell
      grid[c][r] = {
        x: c * cellSize,
        y: r * cellSize,
        mine: isMine,
        revealed: false,
        flagged: false
      };
    }
  }
}

function draw() {
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let cell = grid[c][r];
      stroke(0);
      
      if (cell.revealed === true) {
        if (cell.mine === true) {
          fill(255, 0, 0); // Red mine
        } else {
          fill(200); // Safe gray
        }
      } else {
        fill(150); // Unrevealed dark gray
      }
      
      rect(cell.x, cell.y, cellSize, cellSize);
    }
  }
}


function mousePressed() {
  // Convert pixels to columns and rows
  let c = floor(mouseX / cellSize);
  let r = floor(mouseY / cellSize);
  
  // Make sure they clicked inside the canvas
  if (c >= 0 && c < cols && r >= 0 && r < rows) {
    let clickedCell = grid[c][r];
    
    // Check if they right clicked
    if (mouseButton === RIGHT) {
      if (clickedCell.revealed === false) {
        // Flip the boolean: if it was false, make it true. If true, make false.
        clickedCell.flagged = !clickedCell.flagged; 
      }
    } 
    // Check if they left clicked
    else if (mouseButton === LEFT) {
      if (clickedCell.flagged === false) {
        clickedCell.revealed = true;
      }
    }
  }
}
