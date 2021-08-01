const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var drop = []
var maxdrop = 100
function preload(){
  bg = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create()
  world = engine.world

  if(frameCount%500===0){
    for(var i=0;i<maxdrop;i++){
      drop.push(new Snowfall(random(0,400),random(0,400)))
    }
  }

}

function draw() {
  if(bg)
  background(bg);  
  Engine.update(engine)
  for(var i=0; i<maxdrop;i++){
    drop[i].display()
    drop[i].updateY()
  }
}