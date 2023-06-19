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

  k0 = loadImage("assets/francesca.png");
  k1 = loadImage("assets/roberta.png");
  k2 = loadImage("assets/luca.png");
  a0 = loadImage("assets/giuliano.png");
  a1 = loadImage("assets/eugenio.png");
  a2 = loadImage("assets/giuliana.png");
  e0 = loadImage("assets/giorgio.png");
  e1 = loadImage("assets/dino.png");
  e2 = loadImage("assets/giulio.png");
}

function setup() {
  cnv = createCanvas(700, 1000);
  let x = (windowWidth - width) / 2 + + windowWidth/5;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  category = floor(random(3));
  person = floor(random(3));
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
  push();
  background(bg);
  drawtext();
  tile();
  blendMode(MULTIPLY);
  //blendMode(SCREEN);
  //blendMode(OVERLAY);
  //blendMode(HARD_LIGHT);
  //blendMode(SOFT_LIGHT);
  drawImage();
  pop();
}

function tile() {
  rotate(HALF_PI);
  let c = 7;
  let w = 700 / c;
  let col1;
  let col2;

  for (let i = 3; i < c; i++) {
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
function drawtext() {
  rotate(-HALF_PI);
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
  textAlign(RIGHT);
  textFont(font);
  textSize(20);
  text("CONFERENCE", -50, 60);
  if (category == 0) {
    textSize(50);
    text(conferences.categories[category].kids[person].title, -50, 165);
    textSize(40);
    text(conferences.categories[category].kids[person].name, -50, 105);
    textSize(20);
    text(conferences.categories[category].kids[person].place, -250, 205);
    text(conferences.categories[category].kids[person].date, -50, 205);
    text(conferences.categories[category].kids[person].hour, -50, 235);
  }
  if (category == 1) {
    textSize(50);
    text(conferences.categories[category].ai[person].title, -50, 165);
    textSize(40);
    text(conferences.categories[category].ai[person].name, -50, 105);
    textSize(20);
    text(conferences.categories[category].ai[person].place, -250, 205);
    text(conferences.categories[category].ai[person].date, -50, 205);
    text(conferences.categories[category].ai[person].hour, -50, 235);
  }
  if (category == 2) {
    textSize(50);
    text(conferences.categories[category].eco[person].title, -50, 165);
    textSize(40);
    text(conferences.categories[category].eco[person].name, -50, 105);
    textSize(20);
    text(conferences.categories[category].eco[person].place, -250, 205);
    text(conferences.categories[category].eco[person].date, -50, 205);
    text(conferences.categories[category].eco[person].hour, -50, 235);
  }
}

function drawImage() {
  if (category == 0) {
    if (person == 0) {
      image(k0, 300, 0);
    }
    if (person == 1) {
      image(k1, 300, 0);
    }
    if (person == 2) {
      image(k2, 300, 0);
    }
  }
  if (category == 1) {
    if (person == 0) {
      image(a0, 300, 0);
    }
    if (person == 1) {
      image(a1, 300, 0);
    }
    if (person == 2) {
      image(a2, 300, 0);
    }
  }
  if (category == 2) {
    if (person == 0) {
      image(e0, 300, 0);
    }
    if (person == 1) {
      image(e1, 300, 0);
    }
    if (person == 2) {
      image(e2, 300, 0);
    }
  }
}

function keyPressed() {
  redraw();
}
function mousePressed() {
  saveCanvas(cnv, 'TileTalks - Single conference', 'jpg');
}
