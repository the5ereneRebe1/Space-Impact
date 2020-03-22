import Spaceship from '/spaceship.js'
import InputHandler from './input.js'
import Scribble from './scribble.js';



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
let rect = canvas.getBoundingClientRect();


let spaceship = new Spaceship(GAME_WIDTH,GAME_HEIGHT);
let scribble = new Scribble(rect.left,rect.top);
let lastTime=0;
new InputHandler(spaceship,scribble);

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,spaceship.width+spaceship.position.x,GAME_HEIGHT);
    spaceship.draw(ctx);
    spaceship.update(deltaTime);
    scribble.draw(ctx);




    requestAnimationFrame(gameLoop);
}

gameLoop();