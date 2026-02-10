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
let start = 0.1
let stop = 6.2

// function setup() {
//   createCanvas(400, 400);//create a canvas of 400x400 pixels
// }

//Task 1
// function draw() {

// noFill();
// bezier(85, 20, 10, 10, 90, 90, 15, 80);

// triangle(x1,y1,x2,y2,x3,y3);

// arc(x,y,width,height, start, stop);

// ellipse(x,y,width,height); 
// point(x,y);

// strokeWeight(5);
// line(x1,y1,x2,y2);

// red rectangle
// fill(255,0,0);
// stroke(0,255,0);
// rect(x,y, width, height);
// }


//Task 2 pansexual flag
// function draw() {
// fill(255,230,0, 300);
// stroke(0,0,0,0);
// rect(x-150,y, width+140, height-50);
// fill(255,0,140, 300);
// stroke(0,0,0,0);
// rect(x-150,y-50, width+140, height-50);
// fill(0,190,255, 300);
// stroke(0,0,0,0);
// rect(x-150,y+50, width+140, height-50);
// }

// function draw() {
// fill(255,230,0, 300);
// stroke(0,0,0,0);
// rect(x-150,y, width+140, height-50);
// fill(255,0,140, 300);
// stroke(0,0,0,0);
// rect(x-150,y-50, width+140, height-50);
// fill(0,190,255, 300);
// stroke(0,0,0,0);
// rect(x-150,y+50, width+140, height-50);

// }

function setup() {
    createCanvas(400,400);
    for (let i = 0; i < 501; i = i + 50) {
        ellipse(i,40,40,40);
    }

}

let a = 100;
let b = 100;
let c = 100;
let d = 100;

function draw() {
    fill(255,0,255,2);
    stroke(0,255,0);
    strokeWeight(3);
    rect(a,b,c,d);
}

// function setup() {
//     createCanvas(400,400);
//     frameRate(60);
// }

// let x = 100;
// let y = 100;
// let x_speed = 5;
// let y_speed = 5;

// function draw() {    
//     background(0);

//     fill(0,255,0);
//     ellipse(x,y,20,20);

//     x = x + x_speed;
//     y = y + y_speed;
// }


// function setup() {
//     createCanvas(400,400);
//     frameRate(60);

//     for (let i = 0; i < 400; i = i + 40) {
//         for (let j = 0; j < 400; j = j + 40) {
//             rect(i,20,30,30);
//         }
//     }
// }


// function setup() {
//   createCanvas(400,400);
//   translate(width/2,height/2);
  
//   fill(255,0,0);
//   text("Fly, You Fools!",0,0);
  
// }
