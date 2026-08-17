/// <reference types="p5/global" />

let ball;
function setup() {
    createCanvas(640, 700);
    ball = new Ball();
}

function draw() {
    background(255);

    ball.update();
    ball.bound();
    ball.display();
}
