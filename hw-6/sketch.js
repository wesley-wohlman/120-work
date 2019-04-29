
let red = 0;
let blue = 0;
let green = 10;

let positionX;
let positionY;
let angle;


function setup()
{
    createCanvas(windowWidth, windowHeight);
    background("black");
    positionX = windowWidth/2;
    positionY = windowHeight/2;
    angle = 0;
}


function draw()
{
    translate(positionX,positionY);

    blue += random(0,8);
    green += random(0,8);

    blue = blue%255;
    green = green%255;

    value = floor(random(0,windowWidth));
    let rectangleSize = map(value,0,windowWidth, 10,50);
    rotate(radians(angle));
    fill(red,blue,green);
    rect(0 - rectangleSize/2,0 - rectangleSize/2,rectangleSize,rectangleSize);

    positionX += random(-10,10);
    positionY += random(-10,10);

    postionX = positionX%windowWidth;
    positionY = positionY%windowHeight;

    angle+= floor(random(0,270));
}