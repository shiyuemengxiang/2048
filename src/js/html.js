class Html {
    constructor() {
        this.tileContainer = document.querySelector('.tile-container');
    }
    actuate(grid) {
        window.requestAnimationFrame(() => {
            // this.clearContainer(this.tileContainer);
            grid.cells.forEach((column) => {
                column.forEach((cell) => {
                    if (cell) {
                        this.addTiles(cell);
                    }
                });
            });
        });
    }
    clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    // add class to the tile
    addTiles(tile) {
        const wrapper = document.createElement('div');
        const inner = document.createElement('div');
        const position = this.previousPosition || { x: tile.x, y: tile.y };
        const positionClass = this.positionClass(position);

        const classes = ['tile', `tile-${tile.value}`, positionClass];
        this.applyClass(wrapper, classes);
        inner.classList.add('tile-inner');
        inner.textContent = tile.value;
        wrapper.appendChild(inner);
        this.tileContainer.appendChild(wrapper);
    }
    // normalize the position class
    positionClass(position) {
        position = this.normalizePosition(position);
        return `tile-position-${position.x}-${position.y}`;
    }
    normalizePosition(position) {
        return { x: position.x + 1, y: position.y + 1 };
    }
    // append classes
    applyClass(element, classes) {
        element.setAttribute('class', classes.join(' '));
    }
}
