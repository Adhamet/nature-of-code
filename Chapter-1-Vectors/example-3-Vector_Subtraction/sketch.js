/// <reference types="p5/global" />
// v - u

let mouse;
let center;

function setup() {
    createCanvas(640, 700);
}


function draw() {
    background(255);

    mouse = createVector(mouseX, mouseY);
    center = createVector(width / 2, height / 2);

    stroke(120);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    line(0, 0, center.x, center.y);

    mouse.sub(center);

    stroke(0);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);
}
