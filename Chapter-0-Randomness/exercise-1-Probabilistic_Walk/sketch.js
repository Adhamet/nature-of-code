/// <reference types="p5/global" />


class Walker {
    constructor() {
        this.x = width / 3;
        this.y = height / 3;
    }

    display() {
        stroke(0);
        strokeWeight(1.5);
        point(this.x, this.y);
    }

    action() {
        const probability = [-1, 0, 1, 1];
        const dirX = random(probability);
        const dirY = random(probability);

        this.x += dirX;
        this.y += dirY;

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    }
}


let walker;
function setup() {
    createCanvas(640,400);
    background(255);
    walker = new Walker;
}

function draw() {
    walker.display();
    walker.action();
}
