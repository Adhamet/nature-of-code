/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.noiseScale = 0.01;
    }

    step() {
        loadPixels();

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const tx = x * this.noiseScale;
                const ty = y * this.noiseScale;

                noiseDetail(6, 0.25);
                const bright = floor(map(noise(tx, ty), 0, 1, 0, 255));

                const index = (y * width + x) * 4;
                pixels[index]     = bright;
                pixels[index + 1] = bright;
                pixels[index + 2] = bright;
                pixels[index + 3] = 255;
            }
        }

        updatePixels();
    }
}

let walker;

function setup() {
    createCanvas(640, 280);
    background(255);
    walker = new Walker();
}

function draw() {
    walker.step();
}
