export default class InputHandler{

    constructor(spaceship){
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
    }
}