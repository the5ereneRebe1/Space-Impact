export default class Scribble{

    constructor(canvasLeft,canvasTop){
        this.drawing = false;
        this.mousePos = {x:0, y:0}
        this.lastPos = this.mousePos;
        this.canvasLeft = canvasLeft;
        this.canvasTop = canvasTop;
    }
     getMousePos(mouseEvent) {
        return {
          x: mouseEvent.clientX - this.canvasLeft,
          y: mouseEvent.clientY - this.canvasTop
        };

      }
    mouseDown(e){
        this.drawing = true;
        this.lastPos =this.getMousePos(e);
    }
    mouseUp(e){
        this.drawing = false;
    }
    mouseMove(e){
        this.mousePos ={
            x: e.clientX - this.canvasLeft,
            y:e.clientY - this.canvasTop
        };
    }
    draw(ctx){
        if (this.drawing) {
            ctx.moveTo(this.lastPos.x, this.lastPos.y);
            ctx.lineTo(this.mousePos.x, this.mousePos.y);
            ctx.stroke();
            this.lastPos = this.mousePos;
          }
    }
    
}