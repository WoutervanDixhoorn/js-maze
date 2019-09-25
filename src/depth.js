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
var current;

var stack = [];


//FPS
var fps = 1000;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

var pause = false;

//Initialize variables, etc.
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

//#region MY FUNCTIONS
function Cell(i,j){
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true];
    this.visited = false;

    this.show = function (){
        var offsetx = (canWidth/2 - (cols*size)/2);
        var offsety = canHeight/2 - (cols*size)/2;
        var x = Math.floor((this.i*size) + offsetx);
        var y = Math.floor((this.j*size) + offsety);

        if(this.walls[0]){
            drawLine(x,y,x+size,y,'#FFFFFF');
        }
        if(this.walls[1]){
            drawLine(x+size,y,x+size,y+size,'#FFFFFF');
        }
        if(this.walls[2]){
            drawLine(x+size,y+size,x,y+size,'#FFFFFF');
        }
        if(this.walls[3]){
            drawLine(x,y+size,x,y,'#FFFFFF');
        }

        if(this.visited){
            drawRect(x,y,size,'rgba(255,0,255,0.6)');
        } 
        if(current == this) {
            drawRect(x,y,size,'rgba(255,255,255,0.5)');
        }
    }

    this.checkNeighbours = function (){
        

        var neighbours = [];

        var top = grid[index(i,j-1)];
        var right = grid[index(i+1,j)];
        var bottom = grid[index(i,j+1)];
        var left = grid[index(i-1,j)];

        if(top && !top.visited){
            neighbours.push(top);
        }
        if(right && !right.visited){
            neighbours.push(right);
        }
        if(bottom && !bottom.visited){
            neighbours.push(bottom);
        }
        if(left && !left.visited){
            neighbours.push(left);
        }


        if(neighbours.length > 0){
            var r = Math.floor(Math.random() * neighbours.length);
            return neighbours[r];
        }else{
            return undefined;
        }
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

function drawRect(x,y,size,color){
    c.fillStyle = color;
    c.fillRect(x,y,size,size);
}

function removeWalls(a,b){

    var x = a.i - b.i;
    if(x == 1){
        a.walls[3] = false;
        b.walls[1] = false;
    }else if(x == -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    var y = a.j - b.j;
    if(y == 1){
        a.walls[0] = false;
        b.walls[2] = false;
    }else if(y == -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function index(i,j){
    if(i < 0 || j < 0 || i > cols-1 || j > rows - 1){
        return -1;
    }
    return i + j * cols;
}

//#endregion

//Rendering on screen
function draw(){
    c.clearRect(0,0,canWidth,canHeight);

    grid.forEach(function (element){
        element.show();
    });

    current.visited = true;
    var next = current.checkNeighbours();
    if(next){
        next.visited = true;

        stack.push(current);
        
        removeWalls(current,next);

        current = next;
    }else if(stack.length > 0){
        current = stack.pop();
    }
}

//Logic in here
function update(){

}

function loop(){
    window.requestAnimationFrame(loop);
    // if enough time has elapsed, draw the next frame

    now = Date.now();
    delta = now - then;
    if (delta > interval && !pause) {
        then = now - (delta % interval);
        draw();
        update();
    }

}
loop();

//#region funtions

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    ///console.log("Click");
	if (!event.target.matches('.click')) return;

    // Don't follow the link
    event.preventDefault(); 

    var target = event.target || event.srcElement;

    // Log the clicked element in th    e console
    if(target.innerHTML == "Pause"){
        pause = true;
        target.innerHTML = "Unpause";
    }else if(target.innerHTML == "Unpause"){
        pause = false;
        target.innerHTML = "Pause";
    }


}, false);

//#endregion

