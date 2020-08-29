var car, wall;

var speed,weight;

var deformation;


function setup() {
  createCanvas(800,400);
  
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,200,80,50);
  car.velocityX = speed;

  wall = createSprite(730,200,60,height/2);

  deformation = 0.5*weight*speed*speed / 22500;

}

function draw() {
  background("black"); 

  if ((wall.width/2 + car.width/2) > (car.x - wall.x ) && (wall.width/2 + car.width/2) > (wall.x - car.x )){//} && (wall.height/2 + car.height/2) > (car.y - wall.y ) && (wall.height/2 + car.height/2) > (wall.y - car.y ) ) {
    car.velocityX = 0;
    car.x = 680;
    
    if (deformation<100){
      car.shapeColor = "green";
    }

    else if (deformation>100 && deformation<180){
      car.shapeColor = "yellow";

    }

    else{
      car.shapeColor = "red";
    }
    
    
    
  
  }

  else{
    car.shapeColor = "white";
  }

  drawSprites();
}