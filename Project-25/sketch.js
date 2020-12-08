var ground0;

var bin1, bin2, bin3;

var paper0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

	createCanvas(1260, 700);

	engine = Engine.create();
	world = engine.world;

	ground0 = new Ground(width/2, height-35, width,10);

	paper0 = new Paper(200,500,50,50);
	
	bin1 = new Bin1(935,602,10,110);
	bin2 = new Bin2(1065,602,10,110);
	bin3 = new Bin3(1000, 585,140,10);  

	Engine.run(engine);
  
}


function draw() {

  background("white");
  
  ground0.display();

  paper0.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper0.body,paper0.body.position,{x:350,y:-350});

	}

}



