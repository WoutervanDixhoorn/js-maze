//Set canvas to fit screen
var canvas = document.querySelector('canvas');

//Calculate width and height of canvas
canWidth = window.innerWidth;
canHeight = window.innerHeight - document.querySelector('header').offsetHeight;

canvas.width = canWidth;
canvas.height = canHeight;


//Global vars
var c = canvas.getContext('2d');

let cols, rows;
var size = 40;
var grid = [];

function init(){
    cols = Math.floor(canHeight/size);
    rows = cols;

    for(j = 0; j < rows; j++){
        for(i = 0; i < cols; i++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    current = grid[0];
}
//run init
init();
//////////

function Cell(i,j){
    this.i = i;
    this.j = j;

    this.show = function (){
        var offsetx = (canWidth/2 - (cols*size)/2);
        var offsety = canHeight/2 - (cols*size)/2;
        var x = Math.floor((this.i*size) + offsetx);
        var y = Math.floor((this.j*size) + offsety);

        drawLine(x,y,x+size,y,'#FFFFFF');
        drawLine(x+size,y,x+size,y+size,'#FFFFFF');
        drawLine(x+size,y+size,x,y+size,'#FFFFFF');
        drawLine(x,y+size,x,y,'#FFFFFF');
    }
}

function drawLine(x1,y1,x2,y2,color){
    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.lineWidth = 2;
    c.stroke();
    c.closePath();
}

function draw(){
    c.clearRect(0,0,canWidth,canHeight);

    grid.forEach(function (element){
        element.show();
    });
}

function loop(){
    window.requestAnimationFrame(loop);
    // if enough time has elapsed, draw the next frame
    draw();
}
loop();