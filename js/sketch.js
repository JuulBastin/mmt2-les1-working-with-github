var rood = 0;
var blauw = 0;
var groen = 0;
function setup() {
  // put setup code here
  createCanvas(400,400);
  background(240);
}



function draw() {
  // put drawing code here
  blauw = random(0,255);
  rood = random(255);
  groen = random(255);
  // background(rood,groen,blauw);
  background(0,400-mouseX,0);
  noStroke();
  fill(255,100,100);
  ellipse(200,200,mouseX,mouseY);
  fill(100,100,100);
  // rect(50,50,300,300);
  fill(255,255,255);
  ellipse(200,200,50,50);
  stroke(255);
  strokeWeight(5)
  line(200,800,200,0);
  strokeWeight(2)
  line(800,200,0,200);
  console.log(mouseX)
}