class Game {
    constructor(size, actuator) {
        this.size = size; // size of the grid
        this.actuator = actuator;
        this.startTiles = 2;
        this.setUp();
    }
    setUp() {
        // confirm if there is a localStorage and get the game state
        // or return a new grid

        // build a new grid and init with two tiles
        this.grid = new Grid(this.size);
        this.addStartTiles();
        this.actuate();
    }
    // get the two tiles
    addStartTiles() {
        for (let i = 0; i < this.startTiles; i += 1) {
            this.addRandomTile(); // generate a random tile
        }
    }
    addRandomTile() {
        if (this.grid.cellsAvailable()) {
            const value = Math.random() < 0.9 ? 2 : 4;
            const tile = new Tile(this.grid.randomAvailableCell(), value);
            console.dir(tile);
            this.grid.insertTile(tile);
            console.log(this.grid);
            console.log(this.cells);
        }
    }
    actuate() {
        this.actuator.actuate(this.grid);
        this.prepareTiles();
    }
    prepareTiles() {
        this.grid.eachCell((x, y, tile) => {
            if (tile) {
                tile.savePosition();
            }
        });
    }
}
const html = new Html();
console.log(new Game(4, html));
