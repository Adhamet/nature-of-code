/// <reference types="p5/global" />

let bln1, bln2;
let ty;

function setup() {
    createCanvas(640, 700);
    bln1 = new Balloon(width / 4, height - 50, 3, 120);
    bln2 = new Balloon((3 * width) / 4, height - 50, 1, 40);
    ty = 0.01;
}

function applyForces(bln) {
    let force;
    if (bln.pos.y - (bln.radius) <= 0) {
        force = createVector(0, 4);
        bln.applyForce(force);
    } else {
        const fy = map(noise(ty), 0, 1, -0.01, -2.00);
        force = createVector(0, fy);
        bln.applyForce(force);
    }
}

function runBalloon(bln) {
    bln.update();
    bln.display();
}

function draw() {
    background(255);

    applyForces(bln1);
    applyForces(bln2);

    runBalloon(bln1);
    runBalloon(bln2);

    ty += 0.01;
}
