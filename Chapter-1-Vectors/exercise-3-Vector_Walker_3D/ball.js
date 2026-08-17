/// <reference types="p5/global" />
// This is a ball,
// we move it (update)
// after move, we check and keep in (checkEdges)
// we then show (display)

class Ball {
    constructor() {
        this.pos = createVector(0, 0, 0);
        this.vel = createVector(2, -1, 3);

        this.time = createVector(0.0, 100.0, 1000.0);
        this.timeStep = createVector(0.05, 0.05, 0.05);

        this.tx = 0.1;
        this.ty = 10.0;
        this.tz = 1000.0;

        this.boxSize = 80;
        this.radius = 8;
    }

    update() {
        this.vel.set(
            map(noise(this.time.x), 0, 1, -15, 15),
            map(noise(this.time.y), 0, 1, -15, 15),
            map(noise(this.time.z), 0, 1, -15, 15)
        );

        this.time.add(this.timeStep);
        this.pos.add(this.vel);
    }

    checkEdges() {
        const bound = this.boxSize / 2 - this.radius;
        this.pos.x = constrain(this.pos.x, -bound, bound);
        this.pos.y = constrain(this.pos.y, -bound, bound);
        this.pos.z = constrain(this.pos.z, -bound, bound);
    }

    display() {
        push();

        translate(this.pos.x, this.pos.y, this.pos.z);
        normalMaterial();
        sphere(this.radius);

        pop();
    }
}



