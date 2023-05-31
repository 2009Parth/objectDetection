img = "";

function preload()
{
    img = loadImage('bed.avif');
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
    text("BED", 205, 215);
    noFill();
    stroke("red");
    rect(200, 200, 225, 200);

    fill("red");
    text("LAMP", 155, 215);
    noFill();
    stroke("red");
    rect(150, 200, 60, 100);
}

function back()
{
    window.location = "index.html";
}