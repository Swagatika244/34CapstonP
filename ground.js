class Ground{
    constructor(x, y, w, h){
        var gOpt ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, gOpt);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        fill(255);
        noStroke();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop ();
    }
  }