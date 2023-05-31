img = "";

function preload()
{
    img = loadImage('bottles.jpeg');
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
    text("BOTTLE", 375, 20);
    noFill();
    stroke("red");
    rect(370, 5, 120, 360);

    fill("red");
    text("BOTTLE", 145, 165);
    noFill();
    stroke("red");
    rect(140, 150, 135, 240);
}

function back()
{
    window.location = "index.html";
}