"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
    function Grid(size, previousState) {
        _classCallCheck(this, Grid);

        this.size = size;
        this.cells = previousState ? this.fromState(previousState) : this.empty();
    }
    // Build a specify grid of none value
    // e.g. [[null,null],[null,null]]


    _createClass(Grid, [{
        key: "empty",
        value: function empty() {
            var cells = [];
            for (var x = 0; x < this.size; x += 1) {
                cells[x] = [];
                var row = cells[x];
                for (var y = 0; y < this.size; y += 1) {
                    row.push(null);
                }
            }
            return cells;
        }
    }, {
        key: "fromState",
        value: function fromState(state) {
            var cells = [];
            for (var x = 0; x < this.size; x += 1) {
                cells[x] = [];
                var row = cells[x];
                for (var y = 0; y < this.size; y += 1) {
                    var tile = state[x][y];
                    row.push(tile ? new Tile(tile.position, tile.value) : null);
                }
            }
            return cells;
        }
        // Get the random available cell

    }, {
        key: "randomAvailableCell",
        value: function randomAvailableCell() {
            var cells = this.availableCells();
            if (cells.length) {
                return cells[Math.floor(Math.random() * cells.length)];
            }
        }
        // Get all the available cells

    }, {
        key: "availableCells",
        value: function availableCells() {
            var cells = [];
            this.eachCell(function (x, y, tile) {
                if (!tile) {
                    cells.push({ x: x, y: y });
                }
            });
            return cells;
        }
        // Callback each cell

    }, {
        key: "eachCell",
        value: function eachCell(callback) {
            for (var x = 0; x < this.size; x += 1) {
                for (var y = 0; y < this.size; y += 1) {
                    callback(x, y, this.cells[x][y]);
                }
            }
        }
        // make sure there are cells available

    }, {
        key: "cellsAvailable",
        value: function cellsAvailable() {
            return !!this.availableCells().length;
        }
        // Is the cell available

    }, {
        key: "cellAvailable",
        value: function cellAvailable(cell) {
            return !this.cellOccupied(cell);
        }
        // Is the cell empty

    }, {
        key: "cellOccupied",
        value: function cellOccupied(cell) {
            return !!this.cellContent(cell);
        }
        // get the cell content

    }, {
        key: "cellContent",
        value: function cellContent(cell) {
            if (this.withInGrid(cell)) {
                return this.cells[cell.x][cell.y];
            }
            return null;
        }
        // Is the position within the grid

    }, {
        key: "withInGrid",
        value: function withInGrid(position) {
            return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
        }
    }, {
        key: "insertTile",
        value: function insertTile(tile) {
            this.cells[tile.x][tile.y] = tile;
        }
    }, {
        key: "removeTile",
        value: function removeTile(tile) {
            this.cells[tile.x][tile.y] = null;
        }
    }, {
        key: "serialize",
        value: function serialize() {
            var cellState = [];
            for (var x = 0; x < this.size; x += 1) {
                cellState[x] = [];
                var row = cellState[x];
                for (var y = 0; y < this.y; y += 1) {
                    row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
                }
            }
            return {
                size: this.size,
                cells: cellState
            };
        }
    }]);

    return Grid;
}();