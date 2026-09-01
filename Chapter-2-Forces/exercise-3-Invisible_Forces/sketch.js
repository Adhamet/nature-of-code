/// <reference types="p5/global" />

let bln, walk, wall;
let tx, ty;

function setup() {
    createCanvas(640, 700);
    bln = new Balloon();
    wall = new Wall();
    walk = createVector(0, 0);

    tx = 0.01
    ty = 1000.0;
}

function draw() {
    background(255);


    walk.set(
        map(noise(tx), 0, 1, -0.01, 0.04),
        map(noise(ty), 0, 1, -0.01, 0.04)
    );

    bln.applyForce(walk);
    wall.applyForcesOn(bln);

    bln.update();
    bln.display();

    tx += 0.01;
    ty += 0.01;
}
