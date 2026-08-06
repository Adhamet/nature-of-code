/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y);
    }

    action() {
        const dirX = floor(random(3)) - 1;
        const dirY = floor(random(3)) - 1;

        this.x += dirX;
        this.y += dirY;
    }
}

let walker;

function setup() {
    createCanvas(640, 280);
    background(255);
    walker = new Walker;
}

function draw() {
    walker.display();
    walker.action();
}
