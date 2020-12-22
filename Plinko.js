class Plinko{

    constructor(x,y,r)
    {
    
    var options={
    
    isStatic:true,
   
    }
    
   
    
    this.body=Bodies.circle(this.x, this.y, this.r, options)
     this.x=x;
    this.y=y;
    this.r=r
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