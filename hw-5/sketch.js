/*
* Creating a simple animation using variables
* Remember the draw() function itself is a loop, at 60 fps
* Decide if we want to do creature or shapes.
*/

let flowerRadius, angle;


function setup()
{
    createCanvas(windowWidth, windowHeight);
    background('blue');
    frameRate(5);
    angle = 0;
}

function draw()
{
    pointX = mouseX;
    pointY = mouseY;

    translate(mouseX, mouseY);
    //set up the x^2 and y^2 to plug into the radius equation r = sqrt(x^2 + y^2)
    //the x is = the midpoint of the window - |distance from the midpoint|
    let radiusX = windowWidth/2 - abs(windowWidth/2 - pointX);
    let radiusY = windowHeight/2 - abs(windowHeight/2 - pointY);

    //establishes radius to be used
    flowerRadius = sqrt(((radiusX*radiusX) + (radiusY*radiusY)))/4;

    //While loop creates the flower itself, stopping when the radius gets too small
    while(flowerRadius > 5)
    {
        //rotate petals to make flower
        rotate(radians(angle));
        ellipse(0,0 + flowerRadius/2 ,flowerRadius/2,flowerRadius); //petal creation
        //changing of the angle
        angle = angle + 5;
        //adds a bit of variablity to flower construction
        if(angle%180 == 0)
        {
            flowerRadius = flowerRadius/2;
        }
    }
}