class Brick {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.visiblity = 255;
    var options = {
      isStatic: false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.speed <2.5){
      super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 2;
        tint(255,this.visiblity);
        rect(this.rect, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
        }
  }
  