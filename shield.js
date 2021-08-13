class Shield{
    constructor(index){
        var spos = steps[index].body.position;
        this.image = loadImage('capstonP/round.png');
        this.x = spos.x;
        this.y = spos.y+20;
        this.r = 30;
        this.sprite = createSprite(this.x, this.y, this.r, this.r);
        this.sprite.addImage(this.image);
        this.sprite.scale=0.015;
    }
    move(index){
        this.sprite.x = steps[index].body.position.x
    }
}