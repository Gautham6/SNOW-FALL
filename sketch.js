var snowImg;

function preload() {
  snowImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1708, 780);
  createSprite(400, 200, 50, 50);

  snow = new Snow(845,390);

}

function draw() {
  background(snowImg);

  snow.display();
  drawSprites();
}