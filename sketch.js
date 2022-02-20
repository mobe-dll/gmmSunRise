var  xpage = 500;

function setup() {
  
  createCanvas(xpage, xpage);
  
}


var i = 0;
var j = 0;

function draw() {
  background(255,255,100);
  frameRate(5);
  fill(random(150),random(250),50);
  
  stroke(150,random(250),random(250));
 
  strokeWeight(random(25)+20);
  
  
  var radios = random (250);
    ellipse(random (xpage) ,random (xpage),radios,radios);

}