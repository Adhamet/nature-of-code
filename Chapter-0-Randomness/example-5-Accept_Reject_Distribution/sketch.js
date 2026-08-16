/// <reference types="p5/global"/>

let columns = [];
const size = 20;

function setup() {
    createCanvas(640, 700);
    background(255);
    for (let i = 0; i < size; i++) {
        columns[i] = 0;
    }
}

function getIndex() {
    while (true) {
        const r1 = floor(random(1,21));
        const r2 = floor(random(1,21));
        if (r2 < r1) {
            return r1;
        }
    }
}

function draw() {
    const index = getIndex();
    columns[index]++;

    let w = width / size;
    fill(0);
    stroke(60);
    strokeWeight(2);
    for (let i = 0; i < size; i++) {
        rect(i * w, height - columns[i], w, columns[i]);
    }
}
