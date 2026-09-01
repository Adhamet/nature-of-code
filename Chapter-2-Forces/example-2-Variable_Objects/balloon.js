/// <reference types="p5/global" />

class Balloon {
    constructor(x, y, mass, radius) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = mass

        this.maxSpeed = 14;
        this.radius = radius;
    }

    applyForce(force) {
        // @ts-ignore
        let nForce = p5.Vector.div(force, this.mass);
        this.acc.add(nForce);
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
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

        pop();
    }
}
