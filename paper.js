class Paper {
 constructor(x,y,r){
  var options = {
     restitution:0.3,
     friction:0,
     density:1.2,
     isStatic:false
  }
 this.body = Bodies.circle(x,y,r,options)
 this.r = r
 this.image = loadImage("paper.png");
 World.add(world,this.body)
 }
display(){
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.r*3,this.r*3);
    pop()
 }
}