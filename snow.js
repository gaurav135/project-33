class snow {
    constructor(x,y){
        this.x = 200;
        this.y = 200;
        this.width = 10;
        this.height = 10;

      



    }

    Snow = createSprite(this.x,this.y,5,5);
   // Snow.addImage("snow4.webp");
   
   display(){
       //rect(this.x,this.y,this.width,this.height);
       
      
        s = createSprite(this.x,this.y,this.width,this.height);
        s.addAnimation("sw",  snowimg);
        s.scale = 0.1;



   }
   
}