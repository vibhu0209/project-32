  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1,base2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var ball,slingshot;
var bg = "bg.jpg"
var backgroundImg
var score = 0;
function preload() {

  getBackgroundImg();
  
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  
  box1 = new Box(320,275,30,40);
  box2 = new Box(350,275,30,40);
  box3 = new Box(380,275,30,40);
  box4 = new Box(410,275,30,40);
  box5 = new Box(440,275,30,40);

  box6 = new Box(470,275,30,40);
  box7 = new Box(500,275,30,40);
  box8 = new Box(350,235,30,40);
  box9 = new Box(380,235,30,40);
  box10 = new Box(410,235,30,40);

  box11 = new Box(440,235,30,40);
  box12 = new Box(470,235,30,40);
  box13 = new Box(380,195,30,40);
  box14 = new Box(410,195,30,40);
  box15 = new Box(440,195,30,40);

  box16 = new Box(410,155,30,40);
  box17 = new Box(660,175,30,40);
  box18 = new Box(690,175,30,40);
  box19 = new Box(720,175,30,40);
  box20 = new Box(750,175,30,40);

  box21 = new Box(780,175,30,40);
  box22 = new Box(690,135,30,40);
  box23 = new Box(720,135,30,40);
  box24 = new Box(750,135,30,40);
  box25 = new Box(720,95,30,40);

  ground = new Ground(450,390,120000,20);
  base1 = new Ground(410,300,250,10);
  base2 = new Ground(720,200,200,10);

  ball = new Ball(100,200);
 slingshot = new Slingshot(ball.body,{x:100,y:200});
 Engine.run(engine);
}
function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  fill("cyan")
  text("score:" + score ,10,50 ) 

  fill("cyan")
  box1.display(); 
//  box1.score(); 
  box2.display(); 
  // box2.score(); 
  box3.display(); 
  // box3.score();
  box4.display();
  // box4.score(); 
  box5.display(); 
  // box5.score();
  box6.display();
  // box6.score(); 
  box7.display(); 
  // box7.score();
  fill("pink")
  box8.display(); 
  // box8.score();
  box9.display(); 
  // box9.score();
  box10.display(); 
  // box10.score();
  box11.display();
  // box11.score(); 
  box12.display();
  // box12.score(); 
  fill("springgreen")
  box13.display(); 
  // box13.score();
  box14.display(); 
  // box14.score();
  box15.display(); 
  // box15.score();
  fill("CYAN")
  box16.display(); 
  // box16.score();
  fill("SPRINGGREEN")
  box17.display(); 
  // box17.score();
  box18.display(); 
  // box18.score();
  box19.display(); 
  // box19.score();
  box20.display(); 
  // box20.score();
  box21.display(); 
  // box21.score();
  fill("pink")
  box22.display(); 
  // box22.score();
  box23.display();
  // box23.score(); 
  box24.display(); 
  // box24.score();
  fill("CYAN")
  box25.display(); 
  // box25.score();

  ground.display();
  base1.display();
  base2.display();

  ball.display();
  slingshot.display();

  box1.score(); 
  box2.score(); 
  box3.score(); 
  box4.score(); 
  box5.score(); 
  box6.score(); 
  box7.score(); 
  box8.score(); 
  box9.score(); 
  box10.score(); 
  box11.score(); 
  box12.score();
  box13.score();
  box14.score(); 
  box15.score(); 
  box16.score();
  box17.score();
  box18.score();
  box19.score(); 
  box20.score(); 
  box21.score(); 
  box22.score();
  box23.score(); 
 box24.score(); 
  box25.score(); 

 
}
function keyPressed() {
  if (keyCode === 32) {
      slingshot.attach(ball.body); 
  }
 }
 function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
 }
 function mouseReleased(){
   slingshot.fly();
 }
 async  function getBackgroundImg(){
    
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13)
if(hour >= 06 && hour <= 18 ){
  bg = "bg.jpg"
}
else{
  bg = "bg2.jpg"

}

backgroundImg = loadImage(bg);
}