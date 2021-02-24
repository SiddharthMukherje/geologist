
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var ground
var rubber
var paper
var sand
var stone
var engine
var world 
var iron
function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   hammer=new Hammer(100,50,60,50);
   ground=new Ground(750,height,1500,50)
   rubber=new Rubber(150,100,40)
   paper=new Paper(200,150,50,50)
   sand=new Sand(430,200,50,50)
   sandparticles1=new Sandparticles(380,350,10,50);
   sandparticles2=new Sandparticles(460,300,10,50);
   sandparticles3=new Sandparticles(462,300,10,50);
   sandparticles4=new Sandparticles(465,300,10,50);
   sandparticles5=new Sandparticles(500,300,10,50);
  stone=new Stone(250,240,50,100)
   iron=new Iron(200,240,150,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
ground.display();
rubber.display();
paper.display();
sand.display();
stone.display();
iron.display();
sandparticles1.display();
sandparticles2.display();
sandparticles3.display();
sandparticles4.display();
sandparticles5.display();
 
}



