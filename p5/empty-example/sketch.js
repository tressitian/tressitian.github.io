//our custom variable
let pointX;
let mouseDist;
let triY;

function setup() {
  // create the canvas elements
  createCanvas(1200,800);
  pointX = 600;//giving pointX a value of 300
  rectMode(CENTER);//need to be all capped

}

function draw() {
  background('#fae');//pay attention to where put the background
  mouseDist = dist(mouseX,mouseY,pmouseX,pmouseY);
  print(mouseDist);
  //noStroke();
  //point expects x and y coordinate
  strokeWeight(mouseDist);
  point(pointX,300);
  //line expects two x and y coordinate
  line(mouseX,mouseY,pmouseX,pmouseY);
  fill(190,55,12,50);//affect shape that immediately come after
  //ellipse expect x and y coordinates
  //and weight and Height

  //ellipse(mouseX,mouseY,200,100);
  stroke(random(255),random(255),random(255));
  strokeWeight(mouseDist);
  fill(20,120,45);//fill the shape with color
  //rect expecting an x,y coordinate
  //and width and Height
  rect(width/2, height/2, mouseX,100);//keep the shape in the center
  fill(50,100,255);
  noFill();//transprent image
  //triangle expects three set of x, y
  triangle(200,12,300,200,150,triY);//(x,y,x,y,x,y);

  if(mouseIsPressed){
    triY = 200;
  } else{
    triY = 600;
  }
  if(keyIsPressed){
    save("p5DemoSketch.png");
    pointX = 200;
  } else{
    pointX = 600;
  }

  //print(mouseX);
}
