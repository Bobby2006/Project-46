var form;
var backgroundImg, boyImg, girlImg;

var database;

var playerGender;

function preload()
{
  backgroundImg = loadImage("assets/25501.jpg");

  boyImg = loadImage("assets/Jason.png");
  girlImg = loadImage("assets/Trixy.png");
}

function setup()
{
  createCanvas(windowWidth-15, windowHeight-30);

  form = new Form();

  database = firebase.database();
  console.log(database);
}

function draw()
{
  background(backgroundImg);

  form.display();

  drawSprites();
}