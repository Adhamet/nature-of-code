/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.noiseScale = 0.01;
        this.zoff = 0.0;
    }

    step() {
        loadPixels();

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const tx = x * this.noiseScale;
                const ty = y * this.noiseScale;

                const bright = floor(map(noise(tx, ty, this.zoff), 0, 1, 0, 255));

                const index = (y * width + x) * 4;
                pixels[index]     = bright;
                pixels[index + 1] = bright;
                pixels[index + 2] = bright;
                pixels[index + 3] = 255;
            }
        }

        updatePixels();

        this.zoff += 0.01;
    }
}

let walker;

function setup() {
    createCanvas(640, 700);
    noiseDetail(4, 0.5);
    background(255);
    walker = new Walker();
}

function draw() {
    walker.step();
}
