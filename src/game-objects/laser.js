export default class Laser{
    constructor(x,y){
        this.position = {
            x: x,
            y: y
        };
        this.width = 30;
        this.speed = 500;


    }

    update(deltaTime){
        this.position.x += this.speed / deltaTime;

    }
    draw(ctx){
        // ctx.moveTo(this.position.x, this.position.y);
        // ctx.lineTo(this.position.x+this.width, 150);
        ctx.fillRect(this.position.x,this.position.y,this.width,3);
    }
}