"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), Game = function() {
    function e(t) {
        _classCallCheck(this, e), this.size = t, this.startTiles = 2, this.setUp();
    }
    return _createClass(e, [ {
        key: "setUp",
        value: function() {
            this.grid = new Grid(this.size), this.addStartTiles();
        }
    }, {
        key: "addStartTiles",
        value: function() {
            for (var e = 0; e < this.startTiles; e += 1) this.addRandomTile();
        }
    }, {
        key: "addRandomTile",
        value: function() {
            if (this.grid.cellsAvilable()) {
                var e = Math.random() < .9 ? 2 : 4, t = new Tile(this.grid.randomAvailable(), e);
                this.grid.insertTile(t);
            }
        }
    } ]), e;
}();

new Game(4);

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), Grid = function() {
    function e(t, i) {
        _classCallCheck(this, e), this.size = t, this.cells = i ? this.fromState(i) : this.empty();
    }
    return _createClass(e, [ {
        key: "empty",
        value: function() {
            for (var e = [], t = 0; t < this.size; t += 1) {
                e[t] = [];
                for (var i = e[t], n = 0; n < this.size; n += 1) i.push(null);
            }
            return e;
        }
    }, {
        key: "fromState",
        value: function(e) {
            for (var t = [], i = 0; i < this.size; i += 1) {
                t[i] = [];
                for (var n = t[i], l = 0; l < this.size; l += 1) {
                    var a = e[i][l];
                    n.push(a ? this.newTile(a.position, a.value) : null);
                }
            }
            return t;
        }
    }, {
        key: "newTile",
        value: function(e, t) {
            return new Tile(e, t);
        }
    }, {
        key: "randomAvailableCell",
        value: function() {
            var e = this.availableCells();
            return e.length ? e[Math.floor(Math.random() * e.length)] : this;
        }
    }, {
        key: "availableCells",
        value: function() {
            var e = [];
            return this.eachCell(function(t, i, n) {
                n || e.push({
                    x: t,
                    y: i
                });
            }), e;
        }
    }, {
        key: "eachCell",
        value: function(e) {
            for (var t = 0; t < this.size; t += 1) for (var i = 0; i < this.size; i += 1) e(t, i, this.size[t][i]);
        }
    }, {
        key: "cellsAvailable",
        value: function() {
            return !!this.availableCells().length;
        }
    }, {
        key: "cellAvailable",
        value: function(e) {
            return !this.cellOccupied(e);
        }
    }, {
        key: "cellOccupied",
        value: function(e) {
            return !!this.cellContent(e);
        }
    }, {
        key: "cellContent",
        value: function(e) {
            return this.withInGrid(e) ? this.cells[e.x][e.y] : null;
        }
    }, {
        key: "withInGrid",
        value: function(e) {
            return e.x >= 0 && e.x < this.size && e.y >= 0 && e.y < this.size;
        }
    }, {
        key: "insertTile",
        value: function(e) {
            this.cells[e.x][e.y] = e;
        }
    }, {
        key: "removeTile",
        value: function(e) {
            this.cells[e.x][e.y] = null;
        }
    }, {
        key: "serialize",
        value: function() {
            for (var e = [], t = 0; t < this.size; t += 1) {
                e[t] = [];
                for (var i = e[t], n = 0; n < this.y; n += 1) i.push(this.cells[t][n] ? this.cells[t][n].serialize() : null);
            }
            return {
                size: this.size,
                cells: e
            };
        }
    } ]), e;
}(), _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), Tile = function() {
    function e(t, i) {
        _classCallCheck(this, e), this.x = t.x, this.y = t.y, this.value = i || 2, this.previousPosition = null, 
        this.merged = null;
    }
    return _createClass(e, [ {
        key: "savePosition",
        value: function() {
            this.previousPosition = {
                x: this.x,
                y: this.y
            };
        }
    }, {
        key: "updatePosition",
        value: function(e) {
            this.x = e.x, this.y = e.y;
        }
    }, {
        key: "getSerialize",
        value: function() {
            return {
                position: {
                    x: this.x,
                    y: this.y
                },
                value: this.value
            };
        }
    } ]), e;
}();