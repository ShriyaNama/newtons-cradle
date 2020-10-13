class Bob {
    constructor(x, y){
        var options = {
            "restitution": 1,
            "friction": 0.01,
            "density": 1.2,
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x + 100, pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(this.x = -100, this.y = 0, 40);
        pop();
    }
};