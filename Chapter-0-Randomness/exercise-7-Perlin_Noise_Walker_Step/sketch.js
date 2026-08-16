/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.tx = 0.0;
        this.ty = 1000.0;
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        ellipse(this.x, this.y, 3, 3);
    }

    action() {
        this.x += map(noise(this.tx), 0, 1, -1, 1);
        this.y += map(noise(this.ty), 0, 1, -1, 1);

        this.tx += 0.01;
        this.ty += 0.01;

        this.x = constrain(this.x, 0, 640);
        this.y = constrain(this.y, 0, 700);
    }
}

let walker;

function setup() {
    createCanvas(640, 700);
    background(255);
    walker = new Walker;
}

function draw() {
    walker.display();
    walker.action();
}

