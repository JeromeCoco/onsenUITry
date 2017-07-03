function setup() 
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
	if (mouseIsPressed) {
    	fill(255);
  	} else {
    	fill(0);
  	}
  	noStroke();
	ellipse(mouseX, mouseY, 10, 10);
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function bura()
{
	clear();
}