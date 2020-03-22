export default class Spaceship
{

constructor(gameWidth,gameHeight){
    this.width = 70;
    this.height = 20;
    this.maxSpeed = 40;
    this.speed = 0;
    this.GAME_HEIGHT = gameHeight;
    this.GAME_WIDTH = gameWidth;
    console.log(this.GAME_HEIGHT+":"+this.GAME_WIDTH);

    this.position = {
        x:20,
        y:this.GAME_HEIGHT/2 - this.height/2,
    }

}
moveUp(){
    this.speed = -this.maxSpeed;
}
moveDown(){
    this.speed = this.maxSpeed;
}

update(deltaTime){
    //console.log(deltaTime);
    if(!deltaTime) return;
    this.position.y += this.speed / deltaTime;

    if(this.position.y<0) this.position.y = 0;
    if(this.position.y>this.GAME_HEIGHT-this.height) this.position.y = this.GAME_HEIGHT-this.height;
    
}

draw(ctx) {
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
}