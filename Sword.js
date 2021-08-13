class Sword{
    constructor(index, image){
        var opts = {
            isStatic:false
        }
        this.image = loadImage(image)
        this.x = steps[index].body.position.x ;
        this.y = steps[index].body.position.y +30 ;
        this.body = Bodies.rectangle(this.x, this.y, 5, 5, opts );
        World.add(world, this.body);
        //'capstonP/sword1.png'
        
    }
    display(){
        var pos = this.body.position;
        image (this.image, pos.x, pos.y, 100, 100);
    }
  }