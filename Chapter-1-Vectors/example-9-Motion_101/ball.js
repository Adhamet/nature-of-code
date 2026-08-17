/// <reference types="p5/global" />

class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        // @ts-ignore
        this.acc = p5.Vector.random2D();
        this.acc.mult(random(1));

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
