
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var binwall;
var G;
var wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	binwall = new bin(638,290,0,0);

	wall1 = new ExBin(545,300,5,220);
	wall2 = new ExBin(731,300,5,220);

	ball = new paper(100,370);

	G = new ground(400,400);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
   
  background("lightblue");

  wall1.display();
  wall2.display();

  ball.display();

  G.display();

  binwall.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.position,{x:185,y:-285});
	}
}

