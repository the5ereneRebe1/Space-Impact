let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;
let ballRadius = 10;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
function draw() {
//Todo : Add draw and update methods for canvas
//Todo: Add event listeners here
drawBall();

requestAnimationFrame(draw);
}
requestAnimationFrame(draw);