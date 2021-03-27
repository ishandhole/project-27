
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(700,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new ball(310,500,80);
	bobObject2 = new ball(390,500,80);
	bobObject3 = new ball(470,500,80);
	bobObject4 = new ball(230,500,80);

    roofs = new roof(350,100,370,30);
    
	rope1=new rope(bobObject1.body,roofs.body,-10, 0)
	rope2=new rope(bobObject2.body,roofs.body,70,0)
	rope3=new rope(bobObject3.body,roofs.body,150, 0)
	rope4=new rope(bobObject4.body,roofs.body,-100, 0)

    Engine.run(engine);

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-50,y:-45});
	
		  }
	}

function draw() {
  rectMode(CENTER);
  background(210);
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  roofs.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
}



