let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


let gravity = -.5;
let x = canvas.width-63;
let y = canvas.height -63;
// starting coordinates
let dx = 1;
let dy = 1;
//  change in direction
let spacePressed = false;


// add event listening which look for key presses
document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);
// define functions to handle key up &down


function keyDownHandler(e){
    if(e.key =="Space" || e.key == " "){
        // spacePressed =true;
        console.log(dy);
        if(dy >= -15){
            dy -=10
        }
    }
}
function keyUpHandler(e){
    if(e.key =="Space" || e.key == " "){
        spacePressed = true;
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    if(x+dx > canvas.width -10  || x+dx < 0){
        dx = -dx;
    // IF the ball hits the top or the bottom
    // Direction Y 
    }else if( y+dy > canvas.height -10 || y+dy < 0){
        // dy = -dy;
        dy = -dy;
    }else{
        x += dx;
        // Change in dy direction by gravity causes the bouncing/dampening effect
        dy-= gravity;
        y += dy- gravity;
    }
}

function drawEllipse(){
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height, 350, canvas.height, Math.PI / 1, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawAll(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawEllipse();
    drawBall();
      
}
drawBall();
setInterval(drawAll,5);