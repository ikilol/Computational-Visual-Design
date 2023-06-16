let palette1 = ["#200063", "#4171E2", "#A6FFFD"];
let palette0 = ["#FF658A", "#5ACEE8", "#FFF798"];
let palette2 = ["#391247", "#64D77D", "#DCFEB0"];

let randomBG;
let bg;
let category;
let conferences;

function preload() {
  conferences = loadJSON("conferences.json");
  font = loadFont("assets/font/SuisseIntl-Regular.ttf");
}

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
  //person = floor(random(3));
  colorbg = floor(random(3));

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
  tile();
  bordi();
  drawtext();
}

function tile() {
  let c = 7;
  let w = 700 / c;
  let col1;
  let col2;

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < 10; j++) {
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
  let w = 600 / c;
  let col;
  let a = 2;

  for (let k = 0; k < 2; k++) {
    for (let l = 0; l < 2; l++) {
      if (category == 0) {
        do {
          col = random(palette0);
        } while (col === bg);
      }

      if (category == 1) {
        do {
          col = random(palette1);
        } while (col === bg);
      }

      if (category == 2) {
        do {
          col = random(palette2);
        } while (col === bg);
      }
      if (l === 1 && k === 1) {
        a = 4;
      }
      let angle = a * HALF_PI;
      let med = w / 2;
      a--;

      push();
      translate(k * (700 - w) + w / 2, l * (1000 - w) + w / 2);
      rotate(angle);
      noStroke();
      fill(bg);
      rect(0, 0, w, w);
      fill(col);
      arc(-med, -med, w * 2, w * 2, 0, HALF_PI);
      pop();
    }
    a = 3;
  }
}

function drawtext() {
  fill("#ffffff");
  noStroke();

  if (category == 2) {
    rect(0, 0, 1200, 400);
  } else {
    rect(0, 0, 1000, 400);
  }
  //1st
  rect(400, 350, 200, 100);
  rect(300, 450, 200, 100);
  //2nd
  rect(400, 650, 200, 100);
  rect(500, 750, 200, 100);
  //3rd
  rect(100, 750, 200, 100);
  rect(200, 850, 200, 100);

  let colt;
  if (category == 0) {
    do {
      colt = random(palette0);
    } while (colt === bg);
  }

  if (category == 1) {
    do {
      colt = random(palette1);
    } while (colt === bg);
  }

  if (category == 2) {
    do {
      colt = random(palette2);
    } while (colt === bg);
  }
  fill(colt);
  textSize(60);
  textFont(font);
  text(conferences.titles[category].title, 40, 115);
  textSize(30);
  text("CONFERENCES", 40, 50);
  text(conferences.titles[category].dates, 40, 155);

  textAlign(LEFT);
  for (let i = 0; i < 3; i++) {
    if (category == 0) {
      textSize(17);
      text(conferences.categories[category].kids[i].title, 50 + 225 * i, 920);
      textSize(15);
      text(conferences.categories[category].kids[i].name, 50 + 225 * i, 945);
    }
    if (category == 1) {
      textSize(17);
      text(conferences.categories[category].ai[i].title, 50 + 225 * i, 920);
      textSize(15);
      text(conferences.categories[category].ai[i].name, 50 + 225 * i, 945);
    }
    if (category == 2) {
      textSize(17);
      text(conferences.categories[category].eco[i].title, 50 + 225 * i, 920);
      textSize(15);
      text(conferences.categories[category].eco[i].name, 50 + 225 * i, 945);
    }
  }
}

function keyPressed() {
  redraw();
}
