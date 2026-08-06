/// <reference types="p5/global" />

let randomCount = [];
const total = 20;

function setup() {
    createCanvas(640, 280);
    for (let i = 0; i < total; i++) {
        randomCount[i] = 0;
    }
}

function draw() {
    background(255);
    const index = floor(random(total));
    randomCount[index]++;

    let w = width / total;
    fill(120);
    for (let i = 0; i < total; i++) {
        rect(i * w, height - randomCount[i], w - 1, randomCount[i]);
    }
    fill(0);
}
