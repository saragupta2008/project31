const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var divisions=[];
var plinkos=[];
var particle=[];
var divisionHeight=300
function preload()
{
	
}

function setup() {
	createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,height,480,20);

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  for(var k=0;k <= width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
 }

 for(var j=40;j <= width;j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j=15;j <= width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j=40;j <= width-10;j=j+50){
  plinkos.push(new Plinko(j,275));
}

for(var j=15;j <= width-10;j=j+50){
  plinkos.push(new Plinko(j,375));
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);  
  ground.display();
  for(var i=0; i<particle.length; i++){
    particle[i].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  
  drawSprites();
 
}



