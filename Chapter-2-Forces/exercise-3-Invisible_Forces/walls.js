/// <reference types="p5/global" />

class Wall {
    constructor() {
        this.l = 0;
        this.r = width;
        this.u = 0;
        this.d = height;

        this.lf = createVector(0.07, 0);
        this.rf = createVector(-0.07, 0);
        this.uf = createVector(0, 0.07);
        this.df = createVector(0, -0.07);
    }

    applyForcesOn(object) {
        let xDist = (width / 2) - object.pos.x;
        let yDist = (height / 2) - object.pos.y;

        if (xDist !== 0) {
            let affection = map(abs(xDist), 0, width/2, 0.00, 1.00);
            let forceDir = xDist > 0? this.lf: this.rf;
            // @ts-ignore
            object.applyForce(p5.Vector.mult(forceDir, affection));
        }

        if (yDist !== 0) {
            let affection = map(abs(yDist), 0, width/2, 0.00, 1.00);
            let forceDir = yDist > 0? this.uf: this.df;
            // @ts-ignore
            object.applyForce(p5.Vector.mult(forceDir, affection));
        }

        object.update();
    }
}
