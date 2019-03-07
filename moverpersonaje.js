class Kirby {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vel = 5
  }

  derecha() {
   this.x = this.x + this.vel;
  }

  izquierda() {
    this.x = this.x - this.vel;
  }
  
  arriba(){
    this.y = this.y - this.vel;
  }
  
  abajo(){
    this.y = this.y + this.vel;
  }
  
  mostrar() {
    imageMode(CENTER);
  	image(img, this.x, this.y, 100, 100);
  }
}

var img;
var k;

function preload() {
  img = loadImage('Kirbypractice.png');
}

function setup() {
  createCanvas(400, 400);
  k = new Kirby();
  
}

function draw() {
  background(220);
  k.mostrar();
  mover();
  
}

function mover(){
  if(keyIsPressed && keyCode == RIGHT_ARROW){
  	k.derecha();
  }
  if(keyIsPressed && keyCode == LEFT_ARROW){
  	k.izquierda();
  }
  if(keyIsPressed && keyCode == UP_ARROW){
  	k.arriba();
    }
  if(keyIsPressed && keyCode == DOWN_ARROW){
  	k.abajo();
    }
}
