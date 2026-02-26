let width = 100;
let height = 100;
// let x = 200;
// let y = 200;
let x1 = 300;
let y1 = 200;
let x2 = 300;
let y2 = 300;
let x3 = 100;
let y3 = 300;
let x4 = 150;
let y4 = 100;
let x5 = 300;
let y5 = 250;
let start = 0.1
let stop = 6.2

function setup() {
  createCanvas(1000, 400);//create a canvas of 400x400 pixels
}

// TASK 1
// function draw() {

// noFill();
// bezier(85, 20, 10, 10, 90, 90, 15, 80);

// triangle(x1,y1,x2,y2,x3,y3);

// arc(x4,y4,width,height, start, stop);

// ellipse(x4,y4,width,height); 
// point(x4,y4);

// strokeWeight(5);
// line(x1,y1,x2,y2);

// fill(255,0,0);
// stroke(0,255,0);
// rect(x4,y4, width, height);
// }


// TASK 2 pansexual flag
// function setup() {
//   createCanvas(400, 400);//create a canvas of 400x400 pixels
// }


// function draw() {
// fill(255,0,140, 300);
// stroke(0,0,0,0);
// rect(x1-150,y1, width+140, height-50);
// fill(255,230,0, 300);
// stroke(0,0,0,0);
// rect(x2-150,y2-50, width+140, height-50);
// fill(0,190,255, 300);
// stroke(0,0,0,0);
// rect(x5-150,y5+50, width+140, height-50);
// }

//TASK 3
// function setup() {
//     createCanvas(400,400);//creat canvas of 400x400 pixels
//     for (let i = 0; i < 501; i = i + 50) {//for around 10 times draw an ellipse with a diameter of 40 pixels, starting at x=0 and increasing by 50 pixels each time
//         ellipse(i,i,i,i);
//     }

// }

// let a = 100;
// let b = 100;
// let c = 100;
// let d = 100;
// let z = 100;
// function draw() {
//     fill(255,0,255,2);
//     stroke(0,z,(z+100)%255);
//     strokeWeight(3);
//     rect(a,b,c,d);
//     a = a + 1;
//     b = b + random(-10,10);
//     c = c*0.99;
//     z = z + random(-48,50);
//     d = c;

// }
//the for loop in the set up does'nt work because the draw function is continuously running and drawing over the ellipses, making them invisible. The for loop in the setup only runs once, but the draw function runs repeatedly, so the ellipses are drawn and then immediately covered by the background or other shapes drawn in the draw function.


// TASK 4   
// function setup() {
//     createCanvas(400,400);
//     frameRate(100);//the lower the frame rate, the slower the animation will be, making it easier to see the changes in the position of the shapes.
// }

// let x = 100;
// let y = 100;
// let x_speed = 5;
// let y_speed = 5;

// i=0
// function draw() {    
//     background(0, 30);//refresh the background to create the illusion of movement

//     fill(0,255,0);
//     ellipse(x,y,i,i);

//     x = x + x_speed;
//     y = y - y_speed;
//     if (x > width || x < 0) {
//         x_speed = -x_speed;
//         i=i+1;
//         if (i>100) {
//             i=0;
//         }
//     }
//     if (y > height || y < 0) {
//         y_speed = -y_speed;
//     }
// }

// function setup() {
//   createCanvas(500, 500);
//   frameRate(100);
// }

// let x = 500;
// let y = 10;
// let x_move = -15;
// let y_move = 10;
// let d = 20;

// function draw() {
//   fill(0, 0, 0, 30);
//   rect(0, 0, width, height);
//   //background(0);
//   fill(0, 255, 0);
//   ellipse(x, y, d);

//   x = x + x_move;
//   y = y + y_move;
//   if (x > 500 || x < 0) {
//     x_move = -x_move;
//     d += 0.5;
//   } 
//   if (y > 500 || y < 0) {
//     y_move = -y_move;
//     d += 0.5;
//   }
// }

//TASK 4 copy
// let x = 500;
// let y = 500;
// let x_speed;
// let y_speed;

// let r = 0;
// let g = 100;
// let b = 200;

// function setup() {
//     createCanvas(400,400);
//     frameRate(100);

//     // random starting direction

//     let angle = random(TWO_PI);
//     let speed = 5;
//     x_speed = speed * cos(angle);
//     y_speed = speed * sin(angle);
// }

// function draw() {
//     background(0, 30);

//     fill(r, g, b);
//     ellipse(x, y, 40, 40);

//     // Move
//     x += x_speed+random(TWO_PI);
//     y += y_speed+random(TWO_PI);

//     // Wrap around + speed increase
//     if (x > width) {
//         x = 0;
//         x_speed *= 1.2;
//     }
//     if (x < 0) {
//         x = width;
//         x_speed *= 1.2;
//     }
//     if (y > height) {
//         y = 0;
//         y_speed *= 1.2;
//     }
//     if (y < 0) {
//         y = height;
//         y_speed *= 1.2;
//     }

//     // Smooth colour change
//     r = (r + 2) % 255;
//     g = (g + 3) % 255;
//     b = (b + 4) % 255;
// }

//TASK 5
// function setup() {
//   createCanvas(1000, 400);
//   background(255);

//   let radius = 5;   // starting radius

//   for (let i = 0; i < 10; i++) {
    
//     if (radius < 200) {   // only draw if radius is reasonable
      
//       let greyValue = map(i, 0, 9, 0, 200); // black to light grey
//       fill(greyValue);
//       noStroke();
      
//       ellipse(100 + i * 100, 200, radius * 2, radius * 2);
      
//       radius = radius * 2; // doubling pattern
//     }
//   }
// }

//TASK 6
// function setup() {
//   createCanvas(800, 600);
//   background(0);
//   noStroke();
// }

// function draw() {

//   let mirrorLine = 400;  

//   if (mouseIsPressed) {

//     if (mouseX < mirrorLine) {

//       fill(random(255), random(255), random(255));

//       ellipse(mouseX, mouseY, 40, 40);

//       let mirroredX = 2 * mirrorLine - mouseX;
//       ellipse(mirroredX, mouseY, 40, 40);
//     }
//   }
// }
//TASK 7
// function setup() {
//     createCanvas(400,400);
//     frameRate(60);
//     let x = 0;
//     //let x = random(255);
//     for (let i = 0; i < 400; i = i + 40) {//x
//         for (let j = 0; j < 400; j = j + 40) {//y
//             fill((j*j+255), x, i);
//             rect(i,j,30,30);
//         }
//     }
// }

//TASK 8
// function setup() {
//   createCanvas(500,500);
//   fill(255,0,0);
//   translate(width / 1, height / 1);
//   for (let j = 0; j < 1000; j = j + 20) {
//     fill(0,0,0);
//     rotate(width/44,height);
//     print(text("Fly, You Fools!",0,0));
//         }


// }
