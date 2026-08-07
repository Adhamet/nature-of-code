/// <reference types="p5/global"/>

let slider;

function setup() {
    createCanvas(640, 280);
    background(0);
    slider = createSlider(5, 100, 30, 5);
    slider.position(10, 10);
}

function draw() {
    const x = slider.value() * randomGaussian() + 320;
    const y = slider.value() * randomGaussian() + 140;

    noStroke();
    const r = floor(random(256));
    const g = floor(random(256));
    const b = floor(random(256));
    fill(r, g, b, 50);
    circle(x, y, 6);
}

