const {Bodies, 
Engine, 
Constraint,
Composite,
Body,
Composites,
World} = Matter;

var engine, world;
var engine1, world1;
var ground, step;
var grounds=[];
var steps=[];
var rand;
var rand1, rand2;
var speedArray;
var bkgImg;
var wall1;
var changes = [1, 4, 5, 8, 9, 12];
var ghost, sword;
var con0, con1, con2, con3, con4, con5;
var shield;
var leftCollision, rightCollision;
var bow;
var arrow, power;
var powers = [];


function preload(){
  bkgImg = loadImage('capstonP/bkg.jpg');
  bowImg = loadImage('capstonP/arrow.png')  
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  engine1 = Engine.create();
  world1 = engine1.world;

  createCanvas(windowWidth,windowHeight);

  speedArray =[-1,1];
  rand1 = random(speedArray);

  //create Walls
  wallL = new Ground(100, height/2, 20, height);
  wallR = new Ground(width-100, height/2, 20, height);
  wallG = new Ground(width/2, height - 30, width , 20);
     
  for(var i= height-300; i>0; i=i-80){
    //create Grounds
    ground= new Ground(width/2, i , width, 10);
    grounds.push(ground);

  //create Steps
    rand = random(200, width-200);
    step = new Steps(rand, i-10, 100, 30);
    steps.push(step);  
  }
  //create Bow
    bow = createSprite(width/2, height - 50);
    bow.addImage(bowImg);
    bow.scale = 0.3
  //create Arrow
    arrow = new Arrow(width/2, height-100, 100, 200, 0);

  //create Swords
    swordCreate();

  //create Constraint 
    constraint();

  //create Shield
    createShield();

  
  
}
function draw() {
  Engine.update(engine);
  Engine.update(engine1);

  background(bkgImg);  


   //for(ground of grounds){
      //ground.show();  }

   // move Bow
      if(keyDown(LEFT_ARROW)){
        bow.x -=3;
        arrow.x -=3;
      }
      if(keyDown(RIGHT_ARROW)){
        bow.x +=3;
        arrow.x +=3;

      }
  // display Swords
      swordDisplay();

  // move Steps 
      moveSteps();

  // show Constraint
      showConstraint();

  // display Arrow
      arrow.display();

  // display power 
  for(var power of powers){
    power.display();
        collides();

  }

  // display sprite
      drawSprites();

  // move Shield
      moveShield();

      push();
      noStroke()
      textSize(40);
      text("Use up, down, left, right Arrow and Space", width/2-300, 50);
      pop();
}
function collide(body1, body2, x){
  var d = dist(body1.position.x, body1.position.y, body2.x, body2.y);
    if(d< x){
      return true;
    }else{
      return false;
    }
}

function moveSteps(){
  for(step of steps){
    step.show();

    leftCollision5 = Matter.SAT.collides(wallL.body, steps[5].body);
    rightCollision5 = Matter.SAT.collides(wallR.body, steps[5].body);

       if(leftCollision5.collided){
         changes[5]= 11 ;
       }else if(rightCollision5.collided){
         changes[5]= 12;
       }

          if(changes[5]===11){
            steps[5].move(6);
            }else{
            steps[5].move(-6)
            }

    leftCollision4 = Matter.SAT.collides(wallL.body, steps[4].body);
    rightCollision4 = Matter.SAT.collides(wallR.body, steps[4].body);

       if(leftCollision4.collided){
         changes[4]= 9 ;
       }else if(rightCollision4.collided){
         changes[4]= 10 ;
       }

          if(changes[4]===10){
            steps[4].move(-3);
            }else{
            steps[4].move(3)
            }
    leftCollision3 = Matter.SAT.collides(wallL.body, steps[3].body);
    rightCollision3 = Matter.SAT.collides(wallR.body, steps[3].body);

       if(leftCollision3.collided){
         changes[3]= 7 ;
       }else if(rightCollision3.collided){
         changes[3]= 8 ;
       }

          if(changes[3]===7){
            steps[3].move(3+1);
            }else{
            steps[3].move(-3-1)
            }
    leftCollision2 = Matter.SAT.collides(wallL.body, steps[2].body);
    rightCollision2 = Matter.SAT.collides(wallR.body, steps[2].body);

       if(leftCollision2.collided){
         changes[2]= 5 ;
       }else if(rightCollision2.collided){
         changes[2]= 6 ;
       }

          if(changes[2]===6){
            steps[2].move(-2-1);
            }else{
            steps[2].move(2+1)
            }
    leftCollision1 = Matter.SAT.collides(wallL.body, steps[1].body);
    rightCollision1 = Matter.SAT.collides(wallR.body, steps[1].body);

       if(leftCollision1.collided){
         changes[1]= 3 ;
       }else if(rightCollision1.collided){
         changes[1]= 4 ;
       }

          if(changes[1]===3){
            steps[1].move(5);
            }else{
            steps[1].move(-5)
            }

    leftCollision_0 = Matter.SAT.collides(wallL.body, steps[0].body);
    rightCollision_0 = Matter.SAT.collides(wallR.body, steps[0].body);

       if(leftCollision_0.collided){
         changes[0]= 2 ;
       }else if(rightCollision_0.collided){
         changes[0]= 1 ;
       }

          if(changes[0]===2){
            steps[0].move(6);
            }else{
            steps[0].move(-6)
            }
   // for(var i=0; i<steps.length; i++){
      // if(i % 2===0){
      //     steps[i].move(i+1);
      // }
      // if(i % 2!==0){
      //   steps[i].move(-(i+1));
      // }
   // }
  }
}
function swordCreate(){
  sword5 = new Sword(5, 'capstonP/sword5.png');
  sword4 = new Sword(4, 'capstonP/sword4.png');
  sword3 = new Sword(3, 'capstonP/sword3.png');
  sword2 = new Sword(2, 'capstonP/sword2.png');
  sword1 = new Sword(1, 'capstonP/sword1.png');
  sword0 = new Sword(0, 'capstonP/sword0.png');
  
}
function swordDisplay(){
  sword5.display();
  sword4.display();
  sword3.display();
  sword2.display();
  sword1.display();
  sword0.display();
  
}
function constraint(){
  con5 = Matter.Constraint.create({
    bodyA: steps[5].body,
    pointA: {x:0, y:0},
    bodyB: sword5.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con5);

  con4 = Matter.Constraint.create({
    bodyA: steps[4].body,
    pointA: {x:0, y:0},
    bodyB: sword4.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con4);

  con3 = Matter.Constraint.create({
    bodyA: steps[3].body,
    pointA: {x:0, y:0},
    bodyB: sword3.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con3);

  con2 = Matter.Constraint.create({
    bodyA: steps[2].body,
    pointA: {x:0, y:0},
    bodyB: sword2.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con2);

  con1 = Matter.Constraint.create({
    bodyA: steps[1].body,
    pointA: {x:0, y:0},
    bodyB: sword1.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con1);

    con0 = Matter.Constraint.create({
    bodyA: steps[0].body,
    pointA: {x:0, y:0},
    bodyB: sword0.body,
    pointB: {x:0, y:0},
    length: 5,
    stiffness: 0.1
  })
  World.add(world, con0);
  
}
function collides(){
  //collide
  if(collide(power.body, shield0.sprite, 20)==true){
    shield0.sprite.visible = false;
    Matter.World.remove(world, con0); 
    Matter.World.remove(world, sword0.body);
  }
  if(collide(power.body, shield1.sprite, 20)==true){
    console.log("true");
    shield1.sprite.visible = false;
    Matter.World.remove(world, con1);
    Matter.World.remove(world, sword1.body);
  }
  if(collide(power.body, shield2.sprite, 20)==true){
    console.log("true");
    shield2.sprite.visible = false;
    Matter.World.remove(world, con2);
    Matter.World.remove(world, sword2.body);
  }
  if(collide(power.body, shield3.sprite, 20)==true){
    console.log("true");
    shield3.sprite.visible = false;
    Matter.World.remove(world, con3);
    Matter.World.remove(world, sword3.body);
  }
  if(collide(power.body, shield4.sprite, 20)==true){
    console.log("true");
    shield4.sprite.visible = false;
    Matter.World.remove(world, con4);
    Matter.World.remove(world, sword4.body);
  }
  if(collide(power.body, shield5.sprite, 20)==true){
    console.log("true");
    shield5.sprite.visible = false;
    Matter.World.remove(world, con5);
    Matter.World.remove(world, sword5.body);
  }        
}
function showConstraint(){

  stroke ('#332211');
  strokeWeight (10);
  if(con0 == null){
  line(con5.bodyA.position.x,
    con5.bodyA.position.y,
    con5.bodyB.position.x,
    con5.bodyB.position.y)}
    if(con0 == null){
  line(con4.bodyA.position.x,
    con4.bodyA.position.y,
    con4.bodyB.position.x,
    con4.bodyB.position.y)}
    if(con0 == null){
  line(con3.bodyA.position.x,
    con3.bodyA.position.y,
    con3.bodyB.position.x,
    con3.bodyB.position.y)}
    if(con0 == null){
  line(con2.bodyA.position.x,
    con2.bodyA.position.y,
    con2.bodyB.position.x,
    con2.bodyB.position.y)}
    if(con0 == null){
  line(con1.bodyA.position.x,
    con1.bodyA.position.y,
    con1.bodyB.position.x,
    con1.bodyB.position.y)}

    if(con0 == null){
  line(con0.bodyA.position.x,
    con0.bodyA.position.y,
    con0.bodyB.position.x,
    con0.bodyB.position.y)
  }
}
function createShield(){
     shield5 = new Shield(5);
     shield4 = new Shield(4);
     shield3 = new Shield(3);
     shield2 = new Shield(2);
     shield1 = new Shield(1);
     shield0 = new Shield(0);
}
function moveShield(){
  shield5.move(5);
  shield4.move(4);
  shield3.move(3);
  shield2.move(2);
  shield1.move(1);
  shield0.move(0);



}
function keyReleased(){
  
  if(keyCode===32){
    power.shoot();
  }
}
function keyPressed(){
  //create power  
  if(keyCode === 32){
    power = new Power(arrow.x, arrow.y - 100);
    powers.push(power);
  }
}
class Power{
  constructor(x, y){
    var opt = {
      isStatic : true, 
      restitution : 0, 
      density: 1.0, 
      friction:1.0
    }
    this.body = Bodies.circle(x, y, 10, opt);
    World.add(world1, this.body);

  }
  shoot(){
    var velocity = p5.Vector.fromAngle(arrow.angle-PI/2);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y})

  }
  display(){
    let pos = this.body.position;
    
    push ();
    fill (255, 0, 255, 150);
    noStroke();
    translate (pos.x, pos.y);
    ellipseMode(CENTER)
    ellipse(0, 0, 20);
    pop ();



    
    
    
  }
}

