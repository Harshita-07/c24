const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, pig2, log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(920,300,70,70);
    box2 = new Box(750,300,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(820, 300);
    log1 = new Log(830, 100, 250, PI/2)
  //  pig2 = new pig(870, 390)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
  //  pig2.display();
    
}