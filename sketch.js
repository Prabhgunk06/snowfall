const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowImg,flake1Img ,flake2Img;

function preload(){
  snowImg=loadImage("snow3.jpg");
  flake1Img = loadImage("snowflake.png");
  //flake2Img=loadImage("snow5.webp")
 }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(700,320,70,70);

}

function draw() {
  background(snowImg);
  Engine.update(engine);
  snow.display();
}