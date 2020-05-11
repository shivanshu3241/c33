const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ghost1,ghost2;
var backgroundImg,platform;
var cross, slingshot;

var gameState = "onSling";

var score = 0;

var shot = 0;

function preload() 
{
    backgroundImg = loadImage("Images/background.PNG");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,40);
    ground1 = new Ground(1000,200,200,10);

    platform = new Ground(150, 305, 300, 170);

    ghost1 = new Ghost(810, 350);
    ghost2 = new Ghost(890, 350);
    ghost3 = new Ghost(790, 350);
    ghost4 = new Ghost(730, 350);
    ghost5 = new Ghost(690, 350);

    ghost6 = new Ghost(1060, 180);
    ghost7 = new Ghost(1000, 180);
    ghost8 = new Ghost(940, 180);
    ghost9 = new Ghost(1030, 150);
    ghost10 = new Ghost(970, 150);
    ghost11 = new Ghost(1000,110);

    cross = new Cross(200,50);

    slingshot = new Slingshot(cross.body,{x:210, y:120});

}

function draw()
{
    background(backgroundImg)
   
    Engine.update(engine);
    
    ground.display();
    ground1.display();

    ghost1.display();
    ghost2.display();
    ghost3.display();
    ghost4.display();
    ghost5.display();

    ghost6.display();
    ghost7.display();
    ghost8.display();
    ghost9.display();
    ghost10.display();
    ghost11.display();
    
    cross.display();
    platform.display();

    slingshot.display();    

    ghost1.score();
    ghost2.score();
    ghost3.score();
    ghost4.score();
    ghost5.score();  

    ghost6.score();
    ghost7.score();
    ghost8.score();
    ghost9.score();
    ghost10.score();
    ghost11.score();

    textSize(24);
    fill("white");
    text("SCORE :"+ score,1000,40);

    if(shot == 6){
      gameState = "end"
      text("gameOver", 600, 200);
      
    }

}

function mouseDragged()
{
    if (gameState!=="launched")
    {
        Matter.Body.setPosition(cross.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased()
{
    slingshot.fly();
    gameState = "launched";
}

function keyPressed()
{
    if(keyCode === 32 && cross.body.speed < 1 || cross.body.speed > 25){
        cross.trajectory = [];
        Matter.Body.setPosition(cross.body,{x:210,y:120});
        slingshot.attach(cross.body);
        gameState = "onSling"
    }
}

//async function getTime()
//{
   //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   //var responseJSN = await response.json()
   //var datetime = responseJSN.datetime;
   //var hour = datetime.slice(11,13)
   //console.log(hour)
   //if(hour >= 6 && hour <= 19)
   //{
     //bg = "images/background.PNG"
   //}
   //else
   //{
    // bg = "images/background.PNG" 
   //}
   //backgroundImg = loadImage(bg);
//}