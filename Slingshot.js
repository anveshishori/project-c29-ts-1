class Slingshot{
    constructor(body1,body2){
    
        var options = {
    
            bodyA: body1,
            pointB: body2,
            stiffness: 0.04,
            length:2
        }
           
        this.sling = Constraint.create(options);
        World.add(myworld,this.sling)
    
    
    
    }
    
    fly(){
    this.sling.bodyA = null
    
    }
    
    display(){
    
        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position
        var pointB = this.sling.pointB
       push()
        stroke("white")
        line(pointA.x, pointA.y, pointB.x,pointB.y)
        pop();    
    }
    }
    
    
    }