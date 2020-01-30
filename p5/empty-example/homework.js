
let randColor = ['#2fb6f5','#fada23','#e32e0e','#37ed49','#f5228f'];
//'rgba(0,255,0, 0.25)', 'rgba(255,0,0, 0.25)', 'rgba(0,0,255, 0.25)'

function setup(){
  createCanvas(1440,800);
  //background('rgba(0,255,0, 0.25)');

  background('white');

}
function draw(){
  //stroke(255);
  //circle(mouseX, mouseY,30);
  fill(random(randColor));
  noStroke();

  if(mouseIsPressed){
  circle(mouseX,mouseY,50);
  } else{
    circle(mouseX,mouseY,5);
  }

  if(keyIsPressed){
    square(mouseX,mouseY,100);
  } else{
    circle(0,0,0);
  }
}
