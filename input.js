export default class InputHandler{

    constructor(spaceship,scribble){
        document.addEventListener('keydown',(event) =>{
            switch (event.keyCode) {
                case 38:
                    spaceship.moveUp();
                    break;
                case 40:
                    spaceship.moveDown();
                    break;
                    
                default:
                    break;
            }
        });
        let canvas = document.getElementById("canvas");
        canvas.addEventListener("mousedown", (e) => {
            scribble.mouseDown(e);
        });
        canvas.addEventListener("mouseup", (e) => {
         scribble.mouseUp(e);   
        });
        canvas.addEventListener("mousemove",(e) => {
         scribble.mouseMove(e);
        });
        
        
    }
}