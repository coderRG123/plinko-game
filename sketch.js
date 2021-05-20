
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var player=[];
var ball=[];
var ball1=[];
var ball2=[];
var th=100
var score=0;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

  

	//grounds
ground1=new Ground(400, 595, 800, 10);
ground2=new Ground(5, 300, 10, 600);
ground3=new Ground(100, 500, 10, 200);
ground4=new Ground(195, 500, 10, 200);
ground5=new Ground(290, 500, 10, 200);
ground6=new Ground(385, 500, 10, 200);
ground7=new Ground(480, 500, 10, 200);
ground8=new Ground(575, 500, 10, 200);
ground9=new Ground(670, 500, 10, 200);
ground10=new Ground(795, 300, 10, 600);

for (var i=50; i<800; i=i+50){
  ball.push(new balls (i, 70));
}

for (var x=20; x<800; x=x+50){
  ball1.push(new balls (x, 170));
}

for (var y=50; y<800; y=y+50){
  ball2.push(new balls (y, 270));
}






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  fill(0);
  textSize(20);
  text("100", 410, 420);
  text("100", 320, 420);
  text("50", 510, 420);
  text("50", 220, 420);
  text("30", 610, 420);
  text("30", 120, 420);
  text("10", 710, 420);
  text("10", 40, 420);
  textSize(50);
   text(score, 400, 300);
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();




 

 
 for (var i=0; i<ball.length; i++){
   ball[i].display();
 }

 for (var x=0; x<ball.length; x++){
  ball1[x].display();
}

for (var y=0; y<ball.length; y++){
  ball2[y].display();
}
if(frameCount%40===0){
player.push(new Player(random(20, 780),  10, 10));

}

for (var j=0; j<player.length; j++){
  player[j].display();




if(th===100){
if(player[j].body.position.y>420){
if(player[j].body.position.x>390&&player[j].body.position.x<470||player[j].body.position.x>295&&player[j].body.position.x<380){
    score=100

    }
}
}

if(th===100){
  if(player[j].body.position.y>420){
      if(player[j].body.position.x>200&&player[j].body.position.x<285||player[j].body.position.x>485&&player[j].body.position.x<570){
        score=50
    }
  }
  }

  if(th===100){
    if(player[j].body.position.y>420){
      if(player[j].body.position.x>105&&player[j].body.position.x<190||player[j].body.position.x>580&&player[j].body.position.x<665){
        score=30
        }
    }
    }

    if(th===100){
      if(player[j].body.position.y>420){
          if(player[j].body.position.x>10&&player[j].body.position.x<95||player[j].body.position.x>675&&player[j].body.position.x<790){
            score=10
          }
        }
      }
console.log();
 
}
}
