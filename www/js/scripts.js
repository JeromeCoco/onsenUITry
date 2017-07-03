function setup() 
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
	if (mouseIsPressed) {
    	return 0;
  	} else {
    	fill(0);
  	}
  	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function bura()
{
	clear();
}