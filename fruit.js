img = "";

function preload()
{
    img = loadImage('basket.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("red");
    text("BANANA", 305, 125);
    noFill();
    stroke("red");
    rect(300, 110, 200, 200);

    fill("red");
    text("ORANGE", 90, 135);
    noFill();
    stroke("red");
    rect(85, 120, 165, 120);
}

function back()
{
    window.location = "index.html";
}