var s1,s2;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bgImg;
function preload(){
bgImg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
 s1=new snow(200,10,50,50);
 s2=new snow(300,10,100,100);
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
s1.display();
s2.display();

  drawSprites();
}