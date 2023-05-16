let pallete = ["#1B1B1B", "#EB0000", "#FCFEFC"];

function setup() {
	createCanvas(800, 800);
	noLoop();
	rectMode(CENTER);
}

function draw() {
	background(255);
	tile();
}

function tile() {
	let c = 6;
	let w = width / c;

	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let col1 = random(pallete);
			let col2 = random(pallete);
			let angle = int(random(4)) * HALF_PI;
			let hs = w / 2;

			push();
			translate(i * w + w / 2, j * w + w / 2);
			rotate(angle);
			noStroke();
			fill(col1);
			rect(0, 0, w, w);

			fill(col2);
			arc(-hs, -hs, w * 2, w * 2, 0, HALF_PI);
			pop();
		}
	}
}

function keyPressed() {
	redraw();
}