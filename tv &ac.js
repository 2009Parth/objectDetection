img = "";

function preload()
{
    img = loadImage('tv and ac.jpg');
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
    text("TV", 180, 120);
    noFill();
    stroke("red");
    rect(175, 100, 270, 200);
}

function back()
{
    window.location = "index.html";
}