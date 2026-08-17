/// <reference types="p5/global" />

let ball;

function setup() {
    createCanvas(640, 700, WEBGL);
    ball = new Ball();
}

function draw() {
    background(255);
    orbitControl();

    ball.update();
    ball.checkEdges();
    ball.display();

    push();
    noFill();
    box(80, 80, 80);
    pop();
}
