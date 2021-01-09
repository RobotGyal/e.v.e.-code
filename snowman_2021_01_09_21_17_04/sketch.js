let snow = []

function setup() {
  createCanvas(400, 400);
}

function draw() { 
  background(135, 206, 235, 90);
  snow.push(new Snow());
  snowman();
  for (var flake of snow){
    flake.fall()
    flake.draw()
  }
  leftarm(100);
  rightarm(100);
  face();
  hat();
}

function snowman(){
  noStroke();
  fill(255)
  circle(200, 325, 150);
  circle(200, 220, 100);
  circle(200, 150, 70);
}

function leftarm(len) {
  stroke(101, 67, 53);
  strokeWeight(3);
  line(width*0.4, height/2, len, height/2);
}

function rightarm(len){
  stroke(101, 67, 53);
  strokeWeight(3);
  line(width*0.6, height/2, width*0.6+len*.67, height/2);
}

function face(){
  stroke(0);
  fill(0);
  circle(width/2 - 15, height/3, 10);
  circle(width/2 + 15, height/3, 10);
  fill(255,165,0);
  noStroke();
  triangle(width/2 - 7, height/3+10,width/2 , height/3 + 20, width/2 + 7, height/3+10);
  line(width/2 -30, height/3, width/2 +30, height/3);
  fill(0);
  arc(width/2, height/3+30, 20, 20, 0, PI, PIE);
}

function hat(){
  stroke(0);
  strokeWeight(5);
  line(width/2 -40, height/3-15, width/2 +40, height/3-15);
  fill(0);
  rect(width/2-20, height/5-1, 40, 40, 7);
}
