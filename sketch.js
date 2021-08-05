const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,hour;
var bgImg;
var bg,player,player2,snowflake;
var snowfall = [];



function preload()
{
  bgImg = loadImage("snow1.jpg")
  player = loadImage("snowTman.png")
  player2 = loadImage("snowTman2.png")
}
function setup() 
{
  createCanvas(1500,900);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine); 
}
function draw() 
{
  if(bgImg)
  background(bgImg); 
  image(player,400,470,200,300);
  image(player2,1300,350,200,300);

  if (frameRate % 10 === 0)
  {
    snowfall.push(new snowFall(random(width/2-10, width/2+10), 10, 10));
  }

  for (var m = 0; m < snowfall.length; m++) {
    snowfall[m].display();
 }
  
}


 
