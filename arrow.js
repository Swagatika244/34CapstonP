class Arrow{
    constructor(x, y, w, h, angle){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.angle = angle;
        this.image = loadImage('capstonP/weapon.png')
       
    }display(){
        angleMode(RADIANS)
        if (keyIsDown(DOWN_ARROW) && this.angle <= PI/6) {
            this.angle += 0.03;
          }else if (keyIsDown(UP_ARROW) && this.angle >= -PI/6) {
            this.angle -= 0.03;
          }
  
        push ();
        translate(this.x, this.y);
        fill(116,255,255, 50);
        //fill(0,255,0, 50);
        //fill(255,48,37, 50);
        noStroke ();
        arc(0, 100, 500, 500, -PI, 0);
        
        push ();
        imageMode(CENTER);     
        rotate(this.angle);
        image(this.image, 0, 0, this.width, this.height );
        pop ();

        pop ();

        
    }

    
  }