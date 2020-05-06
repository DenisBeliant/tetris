const GRID = {};

const PLAYER = {
    name: "Butters !",
    level: 3,
    score: 0,
};

function chooseBloc(grid) {
    grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
    grid.rotate = Math.floor(Math.random() * grid.bloc.cells.length);
    grid.x = (grid.width / 2) - 1;
    grid.y = 0;
};

function stockBloc(grid) {
    let cells = grid.bloc.cells[grid.rotate];
    for (let i = 0; i < cells.length; i++) {

        for (let e = 0; e < cells[i].length; e++) {

            if (cells[i][e] == true) {
                grid.cells[grid.y + i][grid.x + e] = grid.bloc.id;
            }

        }

    }
}

function initializeModel(grid) {
    grid.cells = [];
    grid.width = 12;
    grid.height = 18;
    grid.bloc = null;
    grid.rotate = -1;
    grid.x = BLOC_START_X;
    grid.y = BLOC_START_Y;
    initializeGrid(grid);
    chooseBloc(grid);
    window.setInterval(update, 500 / PLAYER.level, grid);
};

function initializeGrid(grid) {
    for (let i = 0; i < grid.height; i++) {
        grid.cells[i] = [];
        for (let e = 0; e < grid.width; e++) {
            grid.cells[i][e] = 0;
        }
    }
    // console.log(grid.cells);
}

function update(grid) {
    if (grid.y < grid.height - grid.bloc.cells[grid.rotate].length && !checkCollision(grid, grid.x, grid.y + 1)) grid.y++;
    else {
        stockBloc(grid);
        checkFullLine(grid);
        chooseBloc(grid);
    }
}

function move(grid, sens) {
    if (sens == 'left' && !checkCollision(grid, grid.x - 1, grid.y)) {
        if (grid.x > 0) grid.x--;
    }
    else if (sens == 'right' && !checkCollision(grid, grid.x + 1, grid.y)) {
        if (grid.x < grid.width - grid.bloc.cells[grid.rotate][0].length) grid.x++;
    }
    else grid.y++;
}

function rotate(grid) {
    if (grid.rotate < grid.bloc.cells.length - 1) grid.rotate++;
    else grid.rotate = 0;
}

function checkCollision(grid, x, y) {
    // console.log(grid.height - grid.bloc.cells[grid.rotate].length, grid.y);
    let cells = grid.bloc.cells[grid.rotate];
    let res = false;
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells[i].length; j++) {
            if (grid.cells[y + i][x + j] > 0 && cells[i][j]) res = true;
        }
    }
    return res;
};


function checkFullLine(grid) {

    for (let i = 0; i < grid.cells.length; i++) {
        let res = true;
        for (let j = 0; j < grid.cells[i].length; j++) {
            if (grid.cells[i][j] == 0) res = false;
        }
        if (res) {
            PLAYER.score += 10;
            deleteLine(grid, i);
        } // Supprime
    }

};

function deleteLine(grid, i) {
    for (let e = i; e > 0; e--) {
        for (let j = 0; j < grid.cells[i].length; j++) {
            grid.cells[e][j] = grid.cells[e - 1][j];
        }
    }
    for(let j = 0; j < grid.cells[0].length; j++) {
        grid.cells[0][j] = 0;
    }
};