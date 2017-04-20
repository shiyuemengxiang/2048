'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Html = function () {
    function Html() {
        _classCallCheck(this, Html);

        this.tileContainer = document.querySelector('.tile-container');
    }

    _createClass(Html, [{
        key: 'actuate',
        value: function actuate(grid) {
            var _this = this;

            window.requestAnimationFrame(function () {
                // this.clearContainer(this.tileContainer);
                grid.cells.forEach(function (column) {
                    column.forEach(function (cell) {
                        if (cell) {
                            _this.addTiles(cell);
                        }
                    });
                });
            });
        }
    }, {
        key: 'clearContainer',
        value: function clearContainer(container) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
        // add class to the tile

    }, {
        key: 'addTiles',
        value: function addTiles(tile) {
            var wrapper = document.createElement('div');
            var inner = document.createElement('div');
            var position = this.previousPosition || { x: tile.x, y: tile.y };
            var positionClass = this.positionClass(position);

            var classes = ['tile', 'tile-' + tile.value, positionClass];
            this.applyClass(wrapper, classes);
            inner.classList.add('tile-inner');
            inner.textContent = tile.value;
            wrapper.appendChild(inner);
            this.tileContainer.appendChild(wrapper);
        }
        // normalize the position class

    }, {
        key: 'positionClass',
        value: function positionClass(position) {
            position = this.normalizePosition(position);
            return 'tile-position-' + position.x + '-' + position.y;
        }
    }, {
        key: 'normalizePosition',
        value: function normalizePosition(position) {
            return { x: position.x + 1, y: position.y + 1 };
        }
        // append classes

    }, {
        key: 'applyClass',
        value: function applyClass(element, classes) {
            element.setAttribute('class', classes.join(' '));
        }
    }]);

    return Html;
}();