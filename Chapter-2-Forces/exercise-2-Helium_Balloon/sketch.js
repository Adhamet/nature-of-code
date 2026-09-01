/// <reference types="p5/global" />

let bln;
let ty;

function setup() {
    createCanvas(640, 700);
    bln = new Balloon();
    ty = 0.01;
}

function draw() {
    background(255);

    let force;
    if (bln.pos.y - bln.radius <= 10) {
        force = createVector(0, 5);
        bln.applyForce(force);
    } else {
        const fy = map(noise(ty), 0, 1, -0.01, -2.00);
        force = createVector(0, fy);
        bln.applyForce(force);
    }

    bln.update();
    bln.display();

    ty += 0.01;
}
