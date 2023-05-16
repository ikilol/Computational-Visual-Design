let palette = ["#DCFEB0", "#391247", "#64D77D"];
let randomBG;

function setup() {
	createCanvas(700, 1000);
	noLoop();
	rectMode(CENTER);
  randomBG = random(palette);
}

function draw() {
	background(randomBG);
	tile();
}

function tile() {
	let c = 6;
	let w = width / c;

	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let col1 = random(palette);
			let col2 = random(palette);
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