class Slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling)
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5)
        line(pointA.x,pointA.y, pointB.x, pointB.y)
        }
    }
    fly(){
        this.sling.bodyA = null
    }
}