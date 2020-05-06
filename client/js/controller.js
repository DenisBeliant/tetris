function initializeController(grid) {

    if(!checkCollision(grid, grid.x, grid.y)) {

        window.onkeydown = (event) => {
    
            switch(event.code) {
                case 'ArrowUp': rotate(grid); break;
                case 'ArrowDown': if(!checkCollision(grid,grid.x, grid.y)) move(grid,'down'); break;
                case 'ArrowLeft': move(grid,'left');break;
                case 'ArrowRight': move(grid,'right'); break;
                default: break;
            }
        }
    }
}
