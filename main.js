function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(950, 260);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill('#ff0038');
    stroke('#b22222');
    ellipse(55, 30, 50, 30);

    fill('#ffa07a');
    stroke('#fa8072');
    ellipse(35, 50, 30, 50);

    fill('#ff0038');
    stroke('#b22222');
    ellipse(590, 30, 50, 30);

    fill('#ffa07a');
    stroke('#fa8072');
    ellipse(610, 50, 30, 50);

    fill('#ff0038');
    stroke('#b22222');
    ellipse(55, 450, 50, 30);

    fill('#ffa07a');
    stroke('#fa8072');
    ellipse(35, 430, 30, 50);

    fill('#ff0038');
    stroke('#b22222');
    ellipse(590, 450, 50, 30);

    fill('#ffa07a');
    stroke('#fa8072');
    ellipse(610, 430, 30, 50);

    fill('#b2ffff');
    stroke('#00ffef');
    rect(30, 90, 10, 300);

    fill('#b2ffff');
    stroke('#00ffef');
    rect(605, 90, 10, 300);

    fill('#b2ffff');
    stroke('#00ffef');
    rect(100, 25, 445, 10);

    fill('#b2ffff');
    stroke('#00ffef');
    rect(100, 445, 445, 10);
}

function take_snapshot() {
    save('frame_selfie.png');
}