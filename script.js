let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 10;
let y = 10;
// starting coordinates
let dx = 1;
let dy = 1;
//  change in direction

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    // ctx.rect(x,y,40,40);
    // ctx.stroke();
    ctx.fill();
    ctx.closePath();
    if(x+dx > canvas.width || x+dx < 0){
        dx = -dx;
    }else if( y+dy > canvas.width || y+dy < 0){
        dy = -dy;
    }else{
        x += dx;
        y += dy;
    }
}
drawBall();