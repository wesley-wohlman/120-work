//Setup function and create a  canvas
function setup() {
    createCanvas(200,200)
}

//draw the self portrait or monster portrait
function draw() {
    //create base circle
    push();
    stroke('brown');
    fill('brown')
    ellipse(100,100,100,100)
    pop();
    //create jaw
    push();
    fill('brown');
    stroke('brown');
    ellipse(75,110,75,75);
    ellipse(125,110,75,75);
    pop();
    //create beak
    push();
    fill('yellow');
    stroke('yellow');
    triangle(60,120,100,160,140,120);
    arc(100,120,80,60,PI, TWO_PI);
    pop();
    //create nostrils
    push();
    fill('black');
    triangle(70,105,80,115,85,110);
    triangle(130,105,120,115,115,110);
    pop();
    //create ears
    push();
    fill('brown');
    stroke('brown');
    triangle(80,80,37,105,35,5)
    triangle(120,80,163,105,165,5)
    pop();
    //create eyes
    push();
    ellipse(125,80,25,35);
    ellipse(75,80,25,35);
    fill('black');
    ellipse(75,80,15,25);
    ellipse(125,80,15,25);
    pop();

}
