var car1,car2,car3,wall,wall1,wall2,wall3,bound1,bound2,bound3,disx1,disffwx1,disx2,disffwx2,disx3,disffwx3;
var speed1,speed2,speed3,weight1,weight2,weight3,defomation1,defomation2,defomation3;

function setup(){
  createCanvas(400,400);

  car1 = createSprite(50,100,20,20);
  speed1 = 60
  weight1 = 2260;
  car1.velocityX = 6;
  car1.shapeColor = "white";

  car2 = createSprite(50,200,20,20);
  car2.velocityX = 6;
  speed2= 50;
  weight2 = 1522;
  car2.shapeColor = "white";

  car3 = createSprite(50,300,20,20);
  car3.velocityX = 6;
  speed3 = 45;
  weight3 = 3000;
  car3.shapeColor = "white";

  wall = createSprite(width/2,50,400,10);
  wall.shapeColor = "white";

  wall1 = createSprite(width/2,150,400,10);
  wall1.shapeColor = "white";

  wall2 = createSprite(width/2,250,400,10);
  wall2.shapeColor = "white";

  wall3 = createSprite(width/2,350,400,10);
  wall3.shapeColor = "white";

  bound1 = createSprite(350,100,10,50);
  bound1.shapeColor = "white"

  bound2 = createSprite(350,200,10,50);
  bound2.shapeColor = "white"

  bound3 = createSprite(350,300,10,50);
  bound3.shapeColor = "white";


}

function draw(){
background("black");

disx1 = bound1.x-car1.x;
disffwx1 = car1.width/2+bound1.width/2;

disx2 = bound2.x-car2.x;
disffwx2 = car2.width/2+bound2.width/2;

disx3 = bound3.x-car3.x;
disffwx3 = car3.width/2+bound3.width/2;


if(disx1<disffwx1){
  car1.velocityX = 0;
  //car1.x = 50;
  defomation1 = 0.5*weight1*speed1*speed1/22500;
  if(defomation1<100){
    car1.shapeColor = "green"
  }
  if(defomation1>100&&defomation1<180){
    car1.shapeColor = "yellow"
  }
  if(defomation1>180){
    car1.shapeColor = "red"
  }
 }

if(disx2<disffwx2){
  car2.velocityX = 0;
  //car2.x = 50;
  defomation2 = 0.5*weight2*speed2*speed2/22500;
  if(defomation2<100){
    car2.shapeColor = "green"
  }
  if(defomation2>100&&defomation2<180){
    car2.shapeColor = "yellow"
  }
  if(defomation2>180){
    car2.shapeColor = "red"
  }
 }
 

  if(disx3<disffwx3){
    car3.velocityX = 0;
    //car3.x = 50;
    defomation3 = 0.5*weight3*speed3*speed3/22500;
    if(defomation3<100){
      car3.shapeColor = "green"
    }
    if(defomation3>100&&defomation3<180){
      car3.shapeColor = "yellow"
    }
    if(defomation3>180){
      car3.shapeColor = "red"
    }
  }

drawSprites();
}