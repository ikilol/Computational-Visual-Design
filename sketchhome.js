let img1, img2, img3;
let imgWidth = 350;
let imgHeight = 500;

function preload() {
  img1 = loadImage("assets/poster1.png");
  img2 = loadImage("assets/poster2.png");
  img3 = loadImage("assets/poster3.png");

  font = loadFont("assets/font/SuisseIntl-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#212121");
  textFont(font);
  textAlign(CENTER, TOP);
  textSize(32);
  fill("#ffffff");
  text("Choose your poster", width / 2, 20);

  let img1X = width / 2 - imgWidth - 20;
  let img2X = width / 2;
  let img3X = width / 2 + imgWidth + 20;
  let imgY = height / 2 - imgHeight / 2;

  image(img1, img1X, imgY, imgWidth, imgHeight);
  image(img2, img2X, imgY, imgWidth, imgHeight);
  image(img3, img3X, imgY, imgWidth, imgHeight);
}

function mouseClicked() {
  let img1X = width / 2 - imgWidth - 20;
  let img2X = width / 2;
  let img3X = width / 2 + imgWidth + 20;
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
