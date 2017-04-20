class Tile {
    constructor(position, value) {
        this.x = position.x;
        this.y = position.y;
        this.value = value || 2;
        this.previousPosition = null;
        this.merged = null;
    }
    savePosition() {
        this.previousPosition = { x: this.x, y: this.y };
    }
    updatePosition(newPosition) {
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
    getSerialize() {
        return {
            position: {
                x: this.x,
                y: this.y,
            },
            value: this.value,
        };
    }
}
