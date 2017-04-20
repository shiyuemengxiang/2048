class Grid {
    constructor(size, previousState) {
        this.size = size;
        this.cells = previousState ? this.fromState(previousState) : this.empty();
    }
    // Build a specify grid of none value
    // e.g. [[null,null],[null,null]]
    empty() {
        const cells = [];
        for (let x = 0; x < this.size; x += 1) {
            cells[x] = [];
            const row = cells[x];
            for (let y = 0; y < this.size; y += 1) {
                row.push(null);
            }
        }
        return cells;
    }
    fromState(state) {
        const cells = [];
        for (let x = 0; x < this.size; x += 1) {
            cells[x] = [];
            const row = cells[x];
            for (let y = 0; y < this.size; y += 1) {
                const tile = state[x][y];
                row.push(tile ? new Tile(tile.position, tile.value) : null);
            }
        }
        return cells;
    }
    // Get the random available cell
    randomAvailableCell() {
        const cells = this.availableCells();
        if (cells.length) {
            return cells[Math.floor(Math.random() * cells.length)];
        }
    }
    // Get all the available cells
    availableCells() {
        const cells = [];
        this.eachCell((x, y, tile) => {
            if (!tile) {
                cells.push({ x, y });
            }
        });
        return cells;
    }
    // Callback each cell
    eachCell(callback) {
        for (let x = 0; x < this.size; x += 1) {
            for (let y = 0; y < this.size; y += 1) {
                callback(x, y, this.cells[x][y]);
            }
        }
    }
    // make sure there are cells available
    cellsAvailable() {
        return !!this.availableCells().length;
    }
    // Is the cell available
    cellAvailable(cell) {
        return !this.cellOccupied(cell);
    }
    // Is the cell empty
    cellOccupied(cell) {
        return !!this.cellContent(cell);
    }
    // get the cell content
    cellContent(cell) {
        if (this.withInGrid(cell)) {
            return this.cells[cell.x][cell.y];
        }
        return null;
    }
    // Is the position within the grid
    withInGrid(position) {
        return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
    }
    insertTile(tile) {
        this.cells[tile.x][tile.y] = tile;
    }
    removeTile(tile) {
        this.cells[tile.x][tile.y] = null;
    }
    serialize() {
        const cellState = [];
        for (let x = 0; x < this.size; x += 1) {
            cellState[x] = [];
            const row = cellState[x];
            for (let y = 0; y < this.y; y += 1) {
                row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
            }
        }
        return {
            size: this.size,
            cells: cellState,
        };
    }
}
