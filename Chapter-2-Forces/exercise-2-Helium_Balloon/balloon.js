/// <reference types="p5/global" />

class Balloon {
    constructor() {
        this.pos = createVector(width / 2, height - 50);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.maxSpeed = 20;
        this.radius = 10;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.acc.mult(0);
    }

    display() {
        push();

        stroke(0);
        strokeWeight(2);
        fill(100);
        ellipse(this.pos.x, this.pos.y, 25, 25);

        pop();
    }
}
