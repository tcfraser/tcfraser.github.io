console.log("Loaded Langton's Ant Javascript File");

function langton(config) {
    // canvas
    var canvas = config.canvas;
    var ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    // toroidal
    var torus = config.torus;

    // config
    var stepsPerFrame = config.stepsPerFrame;
    var step = undefined;
    var frame = undefined;

    // enum dir
    var UP = 0;
    var RIGHT = 1;
    var DOWN = 2;
    var LEFT = 3;

    // visual patterns
    var primaryColor = "#313131" // Black
    var secondaryColor = "#FFFFFF" // White
    var stateColors = [secondaryColor, primaryColor]
    var antColor = "#FF0000" // Red
    var blockSize = config.blockSize

    // compatibility
    var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;

    // Mod defined properly for negatively integers as well
    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    // Computes integer of float
    function int(x) {
        return Math.floor(x);
    }

    // Checks if ant is outside the grid. The ant's coordinates can be larger than the grid size
    function isAntOutside() {
        if (torus) { // In a toroidal world, the ant is always present
            return false
        } else {
            if (ant.x < 0 || ant.x >= grid.width) {
                return true
            }
            if (ant.y < 0 || ant.y >= grid.height) {
                return true
            }
        }
        return false
    }

    // Ant object
    var ant = {
        dir: undefined,
        x: undefined,
        y: undefined,

        init: function(x, y) {
            this.dir = UP;
            this.x = x;
            this.y = y;
        },

        move: function() {
            if (this.dir == UP) {
                this.y -= 1;
            } else if (this.dir == DOWN) {
                this.y += 1;
            } else if (this.dir == LEFT) {
                this.x -= 1;
            } else {
                this.x += 1;
            }
        },

        turnLeft: function() {
            this.dir = mod((this.dir - 1), 4);
        },

        turnRight: function() {
            this.dir = mod((this.dir + 1), 4);
        }
    }

    // Grid used to store the state of the world the ant moves in
    var grid = {
        width: undefined,
        height: undefined,
        len: undefined,
        raw: undefined,

        init: function(w, h) {
            this.height = h;
            this.width = w;
            this.len = h*w;
            this.raw = new (Int8Array || Array)(this.len).fill(0);
        },

        whereAnt: function(ant) {
            var xGrid = mod(ant.x, this.width);
            var yGrid = mod(ant.y, this.height);

            return [xGrid, yGrid];
        },

        flip: function(ant) {
            var xyGrid = this.whereAnt(ant);
            var xGrid = xyGrid[0];
            var yGrid = xyGrid[1];

            var val = this.getVal(xGrid, yGrid)
            var newVal = 1 - val
            this.setVal(xGrid, yGrid, newVal)
            return newVal
        },

        getVal: function(xGrid, yGrid) {
            return this.raw[xGrid + yGrid * this.width]
        },

        setVal: function(xGrid, yGrid, val) {
            this.raw[xGrid + yGrid * this.width] = val
        }

    }

    function performStep() {
        // Flip Color In Grid
        newState = grid.flip(ant);
        // Turn
        if (newState == 1) { // primary
            ant.turnLeft();
        } else {             // secondary
            ant.turnRight();
        }

        // Update Canvas
        xyGridAnt = grid.whereAnt(ant);
        ctx.fillStyle = stateColors[newState];
        ctx.fillRect(xyGridAnt[0] * blockSize, xyGridAnt[1] * blockSize, blockSize, blockSize);
        // Move
        ant.move();
        isOutside = isAntOutside(ant)
        if (isOutside) {
            return true
        }
        // Color Ant
        xyGridAnt = grid.whereAnt(ant);
        ctx.fillStyle = antColor;
        ctx.fillRect(xyGridAnt[0] * blockSize, xyGridAnt[1] * blockSize, blockSize, blockSize);

        return false;
    }

    // This loop runs each frame
    function loop() {
        frame++;
        continue_loop = true
        while (step < frame*stepsPerFrame) {
            outside = performStep();
            if (outside) {
                continue_loop = false
                // Reset after hitting edge
                setTimeout(start, 3000);
                break
            }
            step++;
        }
        if (continue_loop) {
            requestAnimationFrame(loop);
        }
    }

    // Set up the world and begin
    function start(){
        step = 0;
        frame = 0;
        ctx.fillStyle = secondaryColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        grid.init(int(canvasWidth/blockSize), int(canvasHeight/blockSize));
        ant.init(int(grid.width/2), int(grid.height/2));

        loop();
    }
    start();
}

// There are multiple canvases to demo different configurations of speed and size
function main() {
    cfgs = {
        intro: {
            stepsPerFrame: 0.02,
            blockSize: 20,
            torus: false,
        },
        attractor: {
            stepsPerFrame: 10,
            blockSize: 4,
            torus: false,
        },
        torus: {
            stepsPerFrame: 100,
            blockSize: 2,
            torus: true,
        },
        stress: {
            stepsPerFrame: 4000,
            blockSize: 1,
            torus: true,
        },
    }

    for (config in cfgs) {
        console.log(config)
        var canvases = document.getElementsByClassName("langtons_ant_"+config);
        for (i = 0; i < canvases.length; i++) {
            config_data = cfgs[config];
            config_data.canvas = canvases[i];
            langton(config_data);
        }
    }
}

// Don't do anything unless the page was loaded
document.addEventListener("DOMContentLoaded", main, false)
