class Plinko{

    constructor(x,y)
    {
    
    var options={
    
    isStatic:true,
   
    }
    
    this.x=x;
    this.y=y;
    this.r=10
    
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    
    World.add(world, this.body);
    }
    
    display() {
    
    var plinkopos=this.body.position;
    
    push()
    translate(plinkopos.x, plinkopos.y); 
    rectMode (CENTER)
    
    fill(255) 
    ellipse(0,0,this.r, this.r);
    
    pop()
    }
    }