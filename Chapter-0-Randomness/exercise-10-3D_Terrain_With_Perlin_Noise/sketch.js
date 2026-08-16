/// <reference types="p5/global" />

let rows = 40;
let cols = 50;
let zoff = 0;
let start = 0;
let startInc = 0.05;
const scl = 20;

function setup() {
    createCanvas(600, 700, WEBGL);
}


function draw() {
    background(0); // clear canvas each frame

    translate(-400, -150);
    rotateX(PI/2.5);

    stroke(0);

    const noiseScale = 0.08;

    let ty = start;
    for (let y = 0; y < rows-1; y++) {
        let tx = 0;

        beginShape(QUAD_STRIP);
        for (let x = 0; x < cols; x++) {
            const n1 = pow(noise(tx, ty, zoff), 3);
            const n2 = pow(noise(tx, ty + noiseScale, zoff), 3);
            const z1 = map(n1, 0, 1, -50, 250);
            const z2 = map(n2, 0, 1, -50, 250);
            const shade1 = map(z1, -50, 250, 20, 255);
            const shade2 = map(z2, -50, 250, 20, 255);
            
            fill(shade1);
            vertex(x * scl, y * scl, z1);
            fill(shade2);
            vertex(x * scl, (y + 1) * scl, z2);

            tx += noiseScale;
        }
        endShape();

        ty += noiseScale;
    }

    zoff += 0.01;
    start += startInc;
}
