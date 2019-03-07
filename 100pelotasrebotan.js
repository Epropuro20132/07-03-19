class Ball {
	constructor() {
		this.x = random(0, 400);
		this.y = random(0, 400);
		this.tam = 50;
		this.velx = random(0,10);
		this.vely = random(0,10);
		this.red = random(0, 255);
		this.green = random(0, 255);
		this.blue = random(0, 255);

	}
	mostrar() {
		fill(this.red, this.blue, this.green);
		ellipse(this.x, this.y, this.tam, this.tam);
	}
	moverx() {
		this.x = this.x + this.velx;
	}

	botarx() {
		if(this.x < 25 || this.x >375){
			this.velx = this.velx * -1;
			this.red = random(0, 255);
			this.green = random(0, 255);
			this.blue = random(0, 255);
		}

	}
	movery() {
		this.y = this.y + this.vely;
	}
	
	botary() {
		if (this.y < 25 || this.y > 375){
		this.vely = this.vely * -1
		}
	}
}

var pelota = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 100; i++) {
		pelota[i] = new Ball();
	}
}

function draw() {
	background(220);

	for (var i = 0; i < 100; i++) {
		pelota[i].mostrar();
		pelota[i].moverx();
		pelota[i].botarx();
		pelota[i].movery();
		pelota[i].botary();
	}
}
