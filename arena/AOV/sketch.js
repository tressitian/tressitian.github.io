

let bg;
let ranks;
let logo;
let fontRegular, fontMedium,fontBold;

//booleans to switch between scenes
let introBool = true;
let graphBool = false;

let randomY = [];
let numPts = 16;

//the x,y coordinate array for the trigger to the graph page/function
let startTrigger = [450,550];

function preload(){
  bg = loadImage("image/bg.jpg");
  ranks = loadImage("image/ranks.png");
  ranks2 = loadImage("image/ranks2.png");
  logo = loadImage("image/logo.png")
  fontRegular = loadFont("font/Futura Condensed Regular.ttf");
  fontMedium = loadFont("font/Futura Condensed Medium.otf");
  fontBold = loadFont("font/Futura Condensed Bold.otf");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(let i =0; i< numPts; i++){
    randomY.push(random(100,300));
      }
}

//your introduction drawing/code goes in this function
function intro(){
  background(bg);
image(ranks,450,600,ranks.width/2.5,ranks.height/2.5);
image(logo,1200,650,logo.width,logo.height);

fill('white');
textSize(20);
textFont(fontMedium);
text("Arena of Valor: 5v5 Arena Game",450,190);

textSize(15);
text("Personal data analysis",450,230);

textSize(16);
text("Arena of Valor is a 5v5 arena game. It is one of the most popular mobile game in China and among the world. In each game, the matching system will pair you up with 4 different players on a team and 5 other people on the other team according to your winning rate, your ranking, your performance, your KDA(Kill/Death/Assist) and the heroes you like to play. Heroes have different positions. There are tank, warrior, assassin, mage and marksman. Marksman tends to have higher KDA than assassin.",450,260,530,200);
text("The other day I read an article about the matching system of the game and was impressed by the algorithm of it. The article says that the system will keep the winning rate of each player around 50%. And the main criteria of the matching system is players’ KDA. In other words, if you get MVP (Most valuable player) – the highest KDA continuously, the more MVP you get, the worse your teammate will be. Vice versa, the more lowest KDA you get, the better teammate you will get. To verify the argument, I looked into my own data and did the analyze.",450,400,530,200);

  //this can also be an image. Uses the startTrigger array to place the graphic.
  //we are checking to see if the mouse is over the ellipse
  //and if the mouse is pressed. if both of these things happen
  //flip the booleans
    textFont(fontBold);
  fill('#edd182');
  textSize(18);

  text("Click here to view the graph.",startTrigger[0], startTrigger[1], 200,20);

  if(mouseIsPressed && dist(mouseX, mouseY, startTrigger[0], startTrigger[1]-20)< 190){
    //flip the booleans so the graph function will draw
    introBool = false;
    graphBool = true;
  }
}

//your graph code goes in this function
function graph(){
  background('#04091e');
  image(logo,1270,700,logo.width/1.4,logo.height/1.4);
  image(ranks2,900,50,ranks2.width/4,ranks2.height/4);

  push();
  stroke('white');
  strokeWeight(0.5);
  line(130,435,1350,435);
  strokeWeight(1);
  line(130,675,1350,675);
  pop();

  fill('white');
  textSize(20);
  textFont(fontMedium);
  text("Arena of Valor: 5v5 Arena Game",70,70);
  text("The relationship between KDA and Ranking",950,750);

  textSize(15);
  text("Personal data analysis",70,100);
  text("Average winning rate(%)",70,150);
  text("100% -- ",70,200);
  text("75% -- ",70,320);
  text("50%  ",70,440);
  text("25% -- ",70,560);
  text("0%  ",70,680);

  text("Total winning rate: 50.13% ",130,750);
  text("MVP: 24 win,  33 lose ",130,775);
  text("Total game played: 373 ",300,750);
  text("Average KDA: 9.1 ",470,750);
  text("Highest ranking: Conquered",300,775);
  text("Area of the circle = KDA credit (kill/death/assist)",440,70);
  text("Color of the inner circle = rankings (displayed on the right side)",440,100);

  textSize(14);
  text("Absense counts as 50%",70,475);

  push();
  stroke(255,255,255,10);
  fill(255,255,255,90);
  ellipse(400,65,30,30);
  fill('#29aae1');
  ellipse(400,95,15,15);
  pop();

  drawLines();
  drawEllipses();

}

function draw() {
  //the intro bool is true right away, so the intro function will
  //draw on page load
  if(introBool == true){
    intro();
  }

  //when the booleans are flipped in the intro function,
  //the graph function will be drawn instead of the intro function
  if(graphBool == true){
    graph();
  }


}

function drawEllipses(){
  noStroke();
    // draw ellipses
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    ellipse(x, y, 7);
  }
}

function drawLines(){
  stroke(225);
 // draw lines
  let px = 0;
  let py = randomY[0];
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    line(px, py, x, y);

  	//store the last position
    px = x;
    py = y;
  }
}
