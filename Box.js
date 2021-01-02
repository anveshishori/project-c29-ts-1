class Box{
    constructor(x,y, width, height, color){
    
        var options={
    
        restitution: 0.4,
        friction :0.3
       
    
        }
    this.body = Bodies.rectangle(x,y,width,height, options)
    
    this.width = width;
    this.height = height;
    this.color = color
    
    World.add(myworld, this.body)
    }
    
    display(){
    
    var angle = this.body.angle;
    angleMode(RADIANS);
   
    push();
fill(this.color);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER)
    rect(0,0,this.width, this.height)
    pop();
    
    }

}
