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
  bordipic();
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
  let c = 7;
  let w = 700 / c;
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
  fill(bg);
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
  rect(600, 650, 200, 100);
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
  if (category == 0) {
    textSize(15);
    text(conferences.categories[category].kids[0].title, 320, 345);
    text(conferences.categories[category].kids[1].title, 520, 645);
    text(conferences.categories[category].kids[2].title, 20, 745);
    text(conferences.categories[category].kids[0].name, 320, 365);
    text(conferences.categories[category].kids[1].name, 520, 665);
    text(conferences.categories[category].kids[2].name, 20, 765);
    textSize(12);
    text(conferences.categories[category].kids[0].place, 220, 435);
    text(conferences.categories[category].kids[1].place, 420, 735);
    text(conferences.categories[category].kids[2].place, 120, 835);
    text(conferences.categories[category].kids[0].date, 220, 455);
    text(conferences.categories[category].kids[1].date, 420, 755);
    text(conferences.categories[category].kids[2].date, 120, 855);
    text(conferences.categories[category].kids[0].hour, 220, 475);
    text(conferences.categories[category].kids[1].hour, 420, 775);
    text(conferences.categories[category].kids[2].hour, 120, 875);
  }
  if (category == 1) {
    textSize(15);
    text(conferences.categories[category].ai[0].title, 320, 345);
    text(conferences.categories[category].ai[1].title, 520, 645);
    text(conferences.categories[category].ai[2].title, 20, 745);
    text(conferences.categories[category].ai[0].name, 320, 365);
    text(conferences.categories[category].ai[1].name, 520, 665);
    text(conferences.categories[category].ai[2].name, 20, 765);
    textSize(12);
    text(conferences.categories[category].ai[0].place, 220, 435);
    text(conferences.categories[category].ai[1].place, 420, 735);
    text(conferences.categories[category].ai[2].place, 120, 835);
    text(conferences.categories[category].ai[0].date, 220, 455);
    text(conferences.categories[category].ai[1].date, 420, 755);
    text(conferences.categories[category].ai[2].date, 120, 855);
    text(conferences.categories[category].ai[0].hour, 220, 475);
    text(conferences.categories[category].ai[1].hour, 420, 775);
    text(conferences.categories[category].ai[2].hour, 120, 875);
  }
  if (category == 2) {
    textSize(15);
    text(conferences.categories[category].eco[0].title, 320, 345);
    text(conferences.categories[category].eco[1].title, 520, 645);
    text(conferences.categories[category].eco[2].title, 20, 745);
    text(conferences.categories[category].eco[0].name, 320, 365);
    text(conferences.categories[category].eco[1].name, 520, 665);
    text(conferences.categories[category].eco[2].name, 20, 765);
    textSize(12);
    text(conferences.categories[category].eco[0].place, 220, 435);
    text(conferences.categories[category].eco[1].place, 420, 735);
    text(conferences.categories[category].eco[2].place, 120, 835);
    text(conferences.categories[category].eco[0].date, 220, 455);
    text(conferences.categories[category].eco[1].date, 420, 755);
    text(conferences.categories[category].eco[2].date, 120, 855);
    text(conferences.categories[category].eco[0].hour, 220, 475);
    text(conferences.categories[category].eco[1].hour, 420, 775);
    text(conferences.categories[category].eco[2].hour, 120, 875);
  }
}
function bordipic() {
  let cold;

  if (category == 0) {
    do {
      cold = random(palette0);
    } while (cold === bg);
  }
  if (category == 1) {
    do {
      cold = random(palette1);
    } while (cold === bg);
  }
  if (category == 2) {
    do {
      cold = random(palette2);
    } while (cold === bg);
  }

  let angle = 1 * HALF_PI;

  //rotate(angle);
  noStroke();
  //1
  fill(bg);
  rect(550, 350, 100, 100);
  fill(cold);
  arc(600, 400, 200, 200, 2 * HALF_PI, 3 * HALF_PI);
  //2
  fill(bg);
  rect(250, 350, 100, 100);
  fill(cold);
  arc(200, 400, 200, 200, 3 * HALF_PI, 4 * HALF_PI);
  //3
  fill(cold);
  rect(450, 450, 100, 100);
  fill(bg);
  arc(400, 400, 200, 200, 0, HALF_PI);
  //4
  fill(bg);
  rect(450, 650, 100, 100);
  fill(cold);
  arc(400, 600, 200, 200, 0, HALF_PI);
  //5
  fill(cold);
  rect(650, 750, 100, 100);
  fill(bg);
  arc(600, 700, 200, 200, 0, HALF_PI);
  //6
  fill(bg);
  rect(250, 750, 100, 100);
  fill(cold);
  arc(300, 700, 200, 200, HALF_PI, 2 * HALF_PI);
  //7
  fill(bg);
  rect(50, 850, 100, 100);
  fill(cold);
  arc(0, 900, 200, 200, 3 * HALF_PI, 4 * HALF_PI);
  //8
  fill(cold);
  rect(350, 850, 100, 100);
  fill(bg);
  arc(300, 800, 200, 200, 0, HALF_PI);
}

function keyPressed() {
  redraw();
}

function mousePressed() {
  saveCanvas(cnv, 'myCanvas', 'jpg');
}
