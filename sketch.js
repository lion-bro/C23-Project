var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite;
var target1,target2,target3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("medical kit.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.09;
	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	target1=createSprite(400,650,200,20);
	target1.shapeColor="red";

	target2=createSprite(310,600,20,100);
	target2.shapeColor="red";

	target3=createSprite(490,600,20,100);
	target3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

if(packageSprite.collide(target1)){
	Matter.Body.setStatic(packageBody,true);
	
}

keyPressed();

rectMode(CENTER);
ellipseMode(RADIUS);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}







