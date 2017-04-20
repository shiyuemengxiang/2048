"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {
    function Tile(position, value) {
        _classCallCheck(this, Tile);

        this.x = position.x;
        this.y = position.y;
        this.value = value || 2;
        this.previousPosition = null;
        this.merged = null;
    }

    _createClass(Tile, [{
        key: "savePosition",
        value: function savePosition() {
            this.previousPosition = { x: this.x, y: this.y };
        }
    }, {
        key: "updatePosition",
        value: function updatePosition(newPosition) {
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: "getSerialize",
        value: function getSerialize() {
            return {
                position: {
                    x: this.x,
                    y: this.y
                },
                value: this.value
            };
        }
    }]);

    return Tile;
}();