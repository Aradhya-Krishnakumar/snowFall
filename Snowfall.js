class snowFall
{
    constructor(x,y,r)
    {
        var options = {
            restitution: 0.4
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("snow5.webp")
        World.add(world,this.body);
    }    
    display() {  
          
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
   
    }
}   