let snow = []

function setup() {
  createCanvas(400, 400);
}

function draw() { 
  background(0);
  snow.push(new Snow());

  for (var flake of snow){
    flake.fall()
    flake.draw()
  }

  body();
  leftarm();
  rightarm();
  face();
  hat();
}

function body(){

}

function leftarm(len) {

}

function rightarm(len){

}

function face(){

}

function hat(){

}
