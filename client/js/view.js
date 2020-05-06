function drawPage(name, level, score) {
    document.getElementById('name').innerText = name;
    document.getElementById('level').innerHTML = level;
    document.getElementById('name').innerHTML = score;
};

function startPage() {

}

function draw(grid, ctx){
    
    ctx.clearRect(0, 0, grid.width * BLOC_SIZE, grid.height * BLOC_SIZE);
    drawTitle(ctx);
    createPiece(grid,ctx);
    drawGrid(grid,ctx);
    window.requestAnimationFrame(() => draw(grid,ctx));

};

function drawCell(ctx, x,y,color) {
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * BLOC_SIZE, y * BLOC_SIZE, BLOC_SIZE, BLOC_SIZE);
    ctx.fillStyle = color;
    ctx.fillRect(x * BLOC_SIZE, y * BLOC_SIZE, BLOC_SIZE, BLOC_SIZE);
}

function createPiece(grid, ctx) {

    let cells = grid.bloc.cells[grid.rotate];
    for (let i = 0; i < cells.length; i++) {

        for (let e = 0; e < cells[i].length; e++) {

            if (cells[i][e] == true) {
                drawCell(ctx, grid.x + e, grid.y + i, grid.bloc.color)
            }
        }
    }
}

function drawGrid(grid, ctx) {
    for(let i = 0; i < grid.cells.length; i++) { // Parcours des cellules de la grille
        for(let e = 0; e < grid.cells[i].length; e++) {
            let cell = grid.cells[i][e];
            if(cell > 0) {
                drawCell(ctx, e, i, BLOCS[cell].color);
            }
        }
    } 

}