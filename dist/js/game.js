"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(size, actuator) {
        _classCallCheck(this, Game);

        this.size = size; // size of the grid
        this.actuator = actuator;
        this.startTiles = 2;
        this.setUp();
    }

    _createClass(Game, [{
        key: "setUp",
        value: function setUp() {
            // confirm if there is a localStorage and get the game state
            // or return a new grid

            // build a new grid and init with two tiles
            this.grid = new Grid(this.size);
            this.addStartTiles();
            this.actuate();
        }
        // get the two tiles

    }, {
        key: "addStartTiles",
        value: function addStartTiles() {
            for (var i = 0; i < this.startTiles; i += 1) {
                this.addRandomTile(); // generate a random tile
            }
        }
    }, {
        key: "addRandomTile",
        value: function addRandomTile() {
            if (this.grid.cellsAvailable()) {
                var value = Math.random() < 0.9 ? 2 : 4;
                var tile = new Tile(this.grid.randomAvailableCell(), value);
                console.dir(tile);
                this.grid.insertTile(tile);
                console.log(this.grid);
                console.log(this.cells);
            }
        }
    }, {
        key: "actuate",
        value: function actuate() {
            this.actuator.actuate(this.grid);
            this.prepareTiles();
        }
    }, {
        key: "prepareTiles",
        value: function prepareTiles() {
            this.grid.eachCell(function (x, y, tile) {
                if (tile) {
                    tile.savePosition();
                }
            });
        }
    }]);

    return Game;
}();

var html = new Html();
console.log(new Game(4, html));