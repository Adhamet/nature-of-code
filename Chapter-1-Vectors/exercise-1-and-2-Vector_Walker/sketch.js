/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.pos = createVector(width / 2, height / 2);

        this.step = createVector(0, 0);
        this.minBound = createVector(0, 0);
        this.maxBound = createVector(width, height);

        this.time = createVector(0.0, 1000.0);
        this.timeChange = createVector(0.1, 0.1);
    }

    display() {
        stroke(0);
        ellipse(this.pos.x, this.pos.y, 16, 16);
    }

    action() {
        this.step.set(
            map(noise(this.time.x), 0, 1, -15, 15),
            map(noise(this.time.y), 0, 1, -15, 15)
        );

        this.pos.add(this.step);
        this.time.add(this.timeChange);
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);
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

