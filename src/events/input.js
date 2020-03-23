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
                case 32:
                    console.log(32);
                    spaceship.shootLaser();
                    
                default:
                    break;
            }

        });
    }
}