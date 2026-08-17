/// <reference types="p5/global" />

class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.topSpeed = 8;

        this.accInc = createVector(0.1, 0.1);
    }

    update() { 
        let mouse = createVector(mouseX, mouseY);
        // @ts-ignore
        let dir = p5.Vector.sub(mouse, this.pos);

        let nMag = map(dir.mag(), 0, max(width, height), 0, 0.2);

        dir.normalize();
        dir.mult(nMag);

        this.acc = dir;

        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
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
