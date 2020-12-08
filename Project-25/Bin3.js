class Bin3{

  constructor(x, y, width, height){

      var options ={

          isStatic : true

      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("dustbin.png");
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      World.add(world,this.body);
  }

  display(){

      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
     
      imageMode(CENTER);

      fill("green");
      stroke("yellow");
      
      image(this.image,0, 0,150, 150);      
      
      pop();

  }

}


    