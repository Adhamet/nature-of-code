/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.time = 0;
    }

    display() {
        stroke(0);
        strokeWeight(1.5);
        point(this.x, this.y);
    }

    action() {
        const r = random();
        if (r < 0.5) {
            if (r < 0.25) {
                if (this.x < mouseX) {
                    this.x++;
                } else {
                    this.x--;
                }
            } else {
                if (this.y < mouseY) {
                    this.y++;
                } else {
                    this.y--;
                }
            }
        } else {
            const choice = floor(random(4));
            if (choice == 0) {
                this.x++;
            } else if (choice == 1) {
                this.x--;
            } else if (choice == 2) {
                this.y++;
            } else {
                this.y--;
            }
        }
    }
}

let walker;

function setup() {
    createCanvas(640, 400);
    background(255);
    walker = new Walker();
}

function draw() {
    walker.display();
    walker.action();
}   
