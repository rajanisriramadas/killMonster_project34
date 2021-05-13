const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var boxes1, boxes2,boxes3,boxes4,boxes9,boxes5,boxes6,boxes7,boxes8,boxes10
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,600,250);
  rope = new Rope(hero.body, { x: 500, y:5 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(600, 100, 70, 70);

boxes1 = new Box(700,100,70,70);
boxes2 = new Box(700,100,70,70)
boxes3 = new Box(700,100,70,70)
boxes4 = new Box(700,100,70,70)
boxes5 = new Box(700,100,70,70)
boxes6 = new Box(700,100,70,70)
boxes7 = new Box(700,100,70,70)
boxes8 = new Box(800,100,70,70)
boxes9 = new Box(800,100,70,70)
boxes10 = new Box(800,100,70,70)

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();
  boxes9.display();
  boxes10.display();
  



  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}