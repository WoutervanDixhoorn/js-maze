//Set canvas to fit screen
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Global vars
var c = canvas.getContext('2d');

let cols, rows;
var size = 50;
var grid = [];

//Initialize variables, etc.
function init(){
    cols = Math.floor((innerHeight/2)/50);
    rows = cols;

    for(j = 0; j < rows; j++){
        for(i = 0; i < cols; i++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
}
//run init
init();
//////////

//Cell
function Cell(i,j){
    this.i = i;
    this.j = j;
    
    this.show = function (){
        var offsetx = (window.innerWidth/2 - (cols*50)/2);
        var offsety = window.innerHeight/2 - (cols*50)/2;
        var x = (this.i*size) + offsetx;
        var y = (this.j*size) + offsety;
        c.fillStyle = 'rgba(255,255,255,1)';
        c.strokeStyle = 'rgba(0,0,0,1)';
        c.strokeRect(x,y,size,size);
        c.fillRect(x,y,size,size);
    }
}

//Rendering on screen
function draw(){
    grid.forEach(function (element){
        element.show();
    });
}

//Logic in here
function update(){

}

function loop(){
    window.requestAnimationFrame(loop);
    //Draw,Update
    draw();
    update();
}
window.requestAnimationFrame(loop);
loop();