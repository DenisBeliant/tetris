// import './blocs.js';
const BLOC_SIZE = 20;
const BLOC_START_Y = 40;
const BLOC_START_X = 20;
const ROTATE = 0;

function initializeView(grid) {

    let song = document.getElementById("myAudio");
    let game = document.getElementById("game");
    let ctx = game.getContext('2d');
    game.height = grid.height * BLOC_SIZE;
    game.width = grid.width * BLOC_SIZE;
    draw(grid,ctx);
    // window.requestAnimationFrame(initializeView(grid));
};

function drawTitle(ctx) {
    ctx.fillStyle = 'green';
    ctx.strokeRect(0, 1, 500, 28);
    ctx.fillStyle = 'red';
    ctx.font = "24px serif";
    ctx.fillText("TETRIS GAME", 40, 24);
    ctx.fillText(PLAYER.score, 1, 24);
};

// drawPage(PLAYER.name, PLAYER.level, PLAYER.score);

initializeModel(GRID);
initializeView(GRID);
initializeController(GRID);
update(GRID);
