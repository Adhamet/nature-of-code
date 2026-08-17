/// <reference types="p5/global" />

let pos;
let vel;

function setup() {
    createCanvas(640, 700);
    pos = createVector(100, 100);
    vel = createVector(10, 20);
}

function draw() {
    background(255);

    pos.add(vel);
    if (pos.x > width || pos.x < 0) {
        vel.x = vel.x * -1;
    }
    if (pos.y > height || pos.y < 0) {
        vel.y = vel.y * -1;
    }

    stroke(0);
    fill(127);
    ellipse(pos.x, pos.y, 16, 16);
}
