/// <reference types="p5/global" />

class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.time = createVector(0, 0);
        this.timeStep = createVector(0.03, 0.047);
    }

    update() {
        this.acc.set(
            map(noise(this.time.x), 0, 1, -0.5, 0.5),
            map(noise(this.time.y), 0, 1, -0.5, 0.5)
        );

        const signX = random() < 0.5 ? -1 : 1;
        const signY = random() < 0.5 ? -1 : 1;
        this.acc.set(this.acc.x * signX, this.acc.y * signY);

        this.time.add(this.timeStep);

        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
    }

    bound() {
        if (this.pos.x + 8 >= width) {
            this.pos.x = 8;
        } else if (this.pos.x - 8 <= 0) {
            this.pos.x = width - 8;
        }

        if (this.pos.y + 8 >= height) {
            this.pos.y = 8;
        } else if (this.pos.y - 8 <= 0) {
            this.pos.y = height - 8;
        }
    }

    display() {
        push();

        stroke(0);
        fill(100);
        ellipse(this.pos.x, this.pos.y, 32, 32);

        pop();
    }
}

