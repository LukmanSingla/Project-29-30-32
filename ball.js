class Ball{
    constructor(x,y,width,height,fill){
        var options={
            restitution:1,
            density:1,
            friction:1
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.fill=fill;
        this.img=loadImage("ball.png");
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(2);
        translate(this.body.position.x,this.body.position.y);
        fill(this.fill);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,100,100);
        pop();
    }
}