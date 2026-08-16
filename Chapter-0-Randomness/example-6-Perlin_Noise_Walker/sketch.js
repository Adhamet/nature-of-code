/// <reference types="p5/global"/>

let t1 = 0.0;
let t2 = 1000.0;

function setup() {
    createCanvas(640, 700);
    background(255);
}

function draw() {
    let x = map(noise(t1), 0, 1, 0, width);
    let y = map(noise(t2), 0, 1, 0, height)
    ellipse(x, y, 16, 16);
    t1 += 0.007;
    t2 += 0.007;
}
