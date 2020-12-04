class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.4,
            length : 10
        }
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    fly(){
        this.shot.bodyA = null;
    }
    attach(){
        this.shot.bodyA = ball.body;
    }
    display(){
        if(this.shot.bodyA){
        stroke("cyan")
        strokeWeight(2);
        line(this.shot.bodyA.position.x, this.shot.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
    }
}