class Ball{
    constructor(x , y ){
         var options ={
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.5
         };
        this.body = Bodies.rectangle(x , y , 75 , 75 , options);
        this.width = 75;
        this.height = 75;
        this.image = loadImage("polygon.png")
        World.add(world , this.body);
    }
    display(){
     //var body = this.body
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x , pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image ,0 , 0 ,this.width , this.height); 
     pop(); 
     
    }
}

  
