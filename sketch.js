let x=0, y=0;
let spacing=40;
let strokeColor=255;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	strokeColor=color(random(255),random(255),random(255))
	stroke(strokeColor)

	if (random(1) < 0.5) line(x, y, x+spacing, y+spacing);
	else line(x, y+spacing, x+spacing, y)

	x = x + spacing;
	if (x > width) {
		x = 0;
		y += spacing;
	}
	if (y > height) {
		x = 0;
		y = 0;
	}
}
