
let bg;
let ranks;
let logo;
let fontRegular, fontMedium;


function preload(){
  bg = loadImage("image/bg.jpg");
  ranks = loadImage("image/ranks.png");
  logo = loadImage("image/logo.png")
  fontRegular = loadFont("font/Futura Condensed Regular.ttf");
  fontMedium = loadFont("font/Futura Condensed Medium.otf");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(bg);
  image(ranks,450,600,ranks.width/2.5,ranks.height/2.5);
  image(logo,1200,650,logo.width,logo.height);

  fill('white');
  textSize(20);
  textFont(fontMedium);
  text("Arena Of Valor: 5v5 Arena Game",450,190);

  textSize(14);
  text("Personal data analysis",450,230);

  textSize(16);
  text("Arena Of Valor is a 5v5 arena game. It is one of the most popular mobile game in China and among the world. In each game, the matching system will pair you up with 4 different players on a team and 5 other people on the other team according to your winning rate, your ranking, your performance, your KDA(Kill/Death/Assist) and the heroes you like to play. Heroes have different positions. There are tank, warrior, assassin, mage and marksman. Marksman tends to have higher KDA than assassin.",450,260,530,200);
  text("The other day I read an article about the matching system of the game and was impressed by the algorithm of it. The article says that the system will keep the winning rate of each player around 50%. And the main criteria of the matching system is players’ KDA. In other words, if you get MVP(Most valuable player) – the highest KDA continuously, the more MVP you get, the worse your teammate will be. Vice versa, the more lowest KDA you get, the better teammate you will get. To verify the argument, I looked into my own data and did the analyze.",450,400,530,200);

}
