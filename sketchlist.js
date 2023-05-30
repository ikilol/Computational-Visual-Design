let palette0 = ["#200063", "#4171E2", "#A6FFFD"];
let palette1 = ["#FF658A", "#5ACEE8", "#FFF798"];
let palette2 = ["#391247", "#64D77D", "#DCFEB0"];
let randomBG;
let bg;
let category;

function setup() {
  cnv = createCanvas(700, 1000);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  category = floor(random(3));

  if (category == 0) {
    bg = random(palette0);
  }

  if (category == 1) {
    bg = random(palette1);
  }

  if (category == 2) {
    bg = random(palette2);
  }
  background(bg);
  // tile();
  bordi();
}

function tile() {
  let c = 6;
  let w = width / c;
  let col1;
  let col2;

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < c + 2; j++) {
      if (category == 0) {
        col1 = random(palette0);
        col2 = random(palette0);
      }

      if (category == 1) {
        col1 = random(palette1);
        col2 = random(palette1);
      }

      if (category == 2) {
        col1 = random(palette2);
        col2 = random(palette2);
      }

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

function bordi() {
  let c = 6;
  let w = width / c;
  let col;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; i++) {
      if (category == 0) {
        //do {
        col = random(palette0);
        //  } while (col === bg);
      }

      if (category == 1) {
        // do {
        col = random(palette1);
        // } while (col === bg);
      }

      if (category == 2) {
        // do {
        col = random(palette2);
        // } while (col === bg);
      }

      let angle = i * HALF_PI;
      let hs = w / 2;

      push();
      translate(i * w + w / 2, j * w + w / 2);
      rotate(angle);
      noStroke();
      fill(bg);
      rect(0, 0, w, w);
      fill(col);
      arc(-hs, -hs, w * 2, w * 2, 0, HALF_PI);
      pop();
    }
  }
}

function keyPressed() {
  redraw();
}
