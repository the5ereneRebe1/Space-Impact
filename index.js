import Spaceship from '/spaceship.js'
import InputHandler from './input.js'



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;



let spaceship = new Spaceship(GAME_WIDTH,GAME_HEIGHT);
let lastTime=0;
new InputHandler(spaceship);

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    let laserObjects = spaceship.getLasers();
    laserObjects = laserObjects.filter((laser) => (laser.position.x <=GAME_WIDTH));    
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    console.log(laserObjects.length);

    for(let i=0;i<laserObjects.length;i++){
        laserObjects[i].draw(ctx);
        laserObjects[i].update(deltaTime);
    }
    spaceship.draw(ctx);
    spaceship.update(deltaTime);




    requestAnimationFrame(gameLoop);
}

gameLoop();