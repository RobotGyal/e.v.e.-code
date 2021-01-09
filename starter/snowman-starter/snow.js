class Snow{
  
  constructor(){
    let x = random(width);
    let y = random(-100, -5);
    this.pos = createVector(x, y);
    this.speed = createVector(0, random(0.5, 1.5));
    this.size = random(2, 10);
    this.max_size = random(height-60, height);
  }
  
  draw() {
    fill(255, 255, 255, 100);
    stroke(255);
    circle(this.pos.x, this.pos.y, this.size);
  }
  
  fall(){
    if (this.pos.y <= this.max_size){
        this.pos.add(this.speed)
    }
  }
}