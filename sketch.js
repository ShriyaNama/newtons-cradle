
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200, 450);
	bob2 = new Bob(240, 450);
	bob3 = new Bob(280, 450);
	bob4 = new Bob(320, 450);
	bob5 = new Bob(360, 450);

	roof = new Roof(280, 300, 200, 20);

	rope1 = new Rope(bob1.body, roof.body, -80, 0);
	rope2 = new Rope(bob2.body, roof.body, -40, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 40, 0);
	rope5 = new Rope(bob5.body, roof.body, 80, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		isStatic = false;
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-75, y:-150});
	}
};