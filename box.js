class Box{
    constructor(x,y,width,height,fill){
        var options={
            restitution:0.3,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.fill=fill;
        this.Visiblity=255;
    }
    display(){
       if((this.body.speed)<3)
{push();
    var pos = this.body.position;
    tint(255,255,255);
    strokeWeight(2);
    translate(pos.x,pos.y);
    fill(this.fill);
    angleMode(RADIANS);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}else
{
World.remove(world,this.body);}
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity);
    }
}