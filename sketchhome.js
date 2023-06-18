let img1, img2, img3;
let imgWidth = 350;
let imgHeight = 500;

function preload() {
  img1 = loadImage("assets/poster1.jpg");
  img2 = loadImage("assets/poster2.jpg");
  img3 = loadImage("assets/poster3.jpg");

  logo = loadImage("assets/logo.png");

  font = loadFont("assets/font/SuisseIntl-Regular.ttf");
}

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  background("#ffffff");
  textFont(font);
  textAlign(CENTER, TOP);
  textSize(32);
  fill("black");
  text(
    "Choose a poster, than press any key to see variations.",
    width / 2,
    windowHeight - 200
  );
  text(
    "Click on the poster to save it on your computer!",
    width / 2,
    windowHeight - 150
  );

  image(logo, windowWidth / 2 - 253, 50);

  let img2X = windowWidth / 2 - imgWidth / 2;
  let img1X = windowWidth / 2 - imgWidth * 2;
  let img3X = windowWidth / 2 + imgWidth;
  let imgY = height / 2 - imgHeight / 2;

  image(img1, img1X, imgY, imgWidth, imgHeight);
  image(img2, img2X, imgY, imgWidth, imgHeight);
  image(img3, img3X, imgY, imgWidth, imgHeight);
}

function mouseClicked() {
  let img2X = windowWidth / 2 - imgWidth / 2;
  let img1X = windowWidth / 2 - imgWidth * 2;
  let img3X = windowWidth / 2 + imgWidth;
  let imgY = height / 2 - imgHeight / 2;

  if (
    mouseX >= img1X &&
    mouseX <= img1X + imgWidth &&
    mouseY >= imgY &&
    mouseY <= imgY + imgHeight
  ) {
    window.location.href = "cycle.html";
  } else if (
    mouseX >= img2X &&
    mouseX <= img2X + imgWidth &&
    mouseY >= imgY &&
    mouseY <= imgY + imgHeight
  ) {
    window.location.href = "list.html";
  } else if (
    mouseX >= img3X &&
    mouseX <= img3X + imgWidth &&
    mouseY >= imgY &&
    mouseY <= imgY + imgHeight
  ) {
    window.location.href = "people.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
