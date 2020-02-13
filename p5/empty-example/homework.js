
let randColor = ['#2fb6f5','#fada23','#e32e0e','#37ed49','#f5228f'];
//'rgba(0,255,0, 0.25)', 'rgba(255,0,0, 0.25)', 'rgba(0,0,255, 0.25)'
//let whiteRoom;
let face;
let acne;
let patch;

//var pika;
//let canvas;
// let asset1;
// let asset4;
// let asset5;
// let asset6;

function preload(){
  //whiteRoom = loadImage("image/WhiteRoom.jpg");
  face = loadImage("image/face.png");
  acne = loadImage("image/acne.png");
  patch = loadImage("image/patch.png");
  background('rgba(0,255,0, 0.25)');
//  pika = loadImage("image/pika.gif");
  // asset1 = loadImage("image/Asset 1.png");
  // asset4 = loadImage("image/Asset 4.png");
  // asset5 = loadImage("image/Asset 5.png");
  // asset6 = loadImage("image/Asset 6.png");
}
function setup(){
createCanvas(windowWidth,windowHeight);
background('rgba(0,255,0, 0.25)');
//canvas = createCanvas(1440,800);
//canvas.position(0,0);
image(face,160,0,windowWidth,1600);
//  background('white');
// canvas.style("z-index", )

//pika = createImg("image/pika.gif");

//pika.style("width", "1000px");
// pika.style("height", "''" + height+ "''");
//pika.position(100, 0);
// pika.style("z-index", "-1");




}
function draw(){
  //stroke(255);
  //circle(mouseX, mouseY,30);
  //image(pika,200,0,1000,windowHeight);

  textSize(20);
  text("click mouse to place acne, space to place patch",50,80,50);


  fill(random(randColor));
  noStroke();

  if(keyIsPressed){
    //square(mouseX,mouseY,20);
    image(patch,mouseX-20,mouseY-20,50,50);
  } else{
    // circle(0,0,0);
  }
   if(mouseIsPressed){

    image(acne,mouseX,mouseY,20,20);
  } else{
   // circle(mouseX,mouseY,5);
  }

}
