const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1280, 590);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	fill("pink");
	strokeWeight (3.5);
	World.add(world,ball);

	groundObj=new ground(width/2,height-20,width,20);
	leftSide = new ground(1050,500,20,120);
	rightSide = new ground(1200,500,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(145, 224, 230);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:80,y:-80});
    
  	}
}
