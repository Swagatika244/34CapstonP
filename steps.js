class Steps{
    constructor(x, y, w, h){
        var opt ={
            isStatic:false,
            restitution:0.8,
            friction:0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, opt);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.image = loadImage("capstonP/ground.png");
    }move(speed){

         Matter.Body.setVelocity(this.body,{x:speed, y:0});
         
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        fill('yellow');
        noStroke();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //rect(0, 0, this.w, this.h);
        imageMode(CENTER);
        image(this.image,0, 0, this.w, this.h ),
        pop ();
    }
  }