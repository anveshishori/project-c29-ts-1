const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

var base1, floor
var poly;
var myworld, myengine;

function preload(){
poly = loadImage("polygon.png");

}

function setup(){

createCanvas(1400,800);

myengine = Engine.create()

myworld = myengine.world

base1 = new Ground(900,500,380,10);
floor = new Ground(700,750,1400,50);
var options ={
density:1.5,
friction: 1,
restitution:0.8

}
hexagon = Bodies.circle (50,200,40)
World.add(myworld,hexagon);
console.log(hexagon)
console.log(hexagon.position.x)

// base level
b1 = new Box(750,480,50,50,"lightblue");
b2 = new Box(800,480,50,50,"lightblue");
b3 = new Box(850,480,50,50,"lightblue");
b4 = new Box(900,480,50,50,"lightblue");
b5 = new Box(950,480,50,50,"lightblue");
b6 = new Box(1000,480,50,50,"lightblue");
b7 = new Box(1050,480,50,50,"lightblue");
//first level
b8 = new Box(800,450,50,50,"white");
b9 = new Box(850,450,50,50,"white");
b10 = new Box(900,450,50,50,"white");
b11 = new Box(950,450,50,50,"white");
b12 = new Box(1000,450,50,50,"white");

// second level
b13 = new Box(850,420,50,50,"lightgreen");
b14 = new Box(900,420,50,50,"lightgreen");
b15 = new Box(950,420,50,50,"lightgreen");

// third level

b16 = new Box(900,390,50,50,"pink");



sling = new Slingshot(hexagon,{x:200,y:350} )

Engine.run(myengine)
}

function draw(){
background(0)


base1.display();
floor.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

imageMode(CENTER);
image(poly,hexagon.position.x, hexagon.position.y,80,80);
sling.display();



}

function mouseDragged(){
   
    Matter.Body.setPosition(hexagon,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly();
    
}