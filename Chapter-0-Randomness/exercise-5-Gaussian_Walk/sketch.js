/// <reference types="p5/global" />

let slider;

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
        const valX = slider.value() * randomGaussian() + 0;
        const valY = slider.value() * randomGaussian() + 0;

        this.x += dirX * valX;
        this.y += dirY * valY;

        this.x = constrain(this.x, 0, 640);
        this.y = constrain(this.y, 0, 280);
    }
}

let walker;

function setup() {
    createCanvas(640, 280);
    background(255);
    walker = new Walker;
    slider = createSlider(1, 20, 1, 1);
    slider.position(10, 10);
}

function draw() {
    walker.display();
    walker.action();
}
