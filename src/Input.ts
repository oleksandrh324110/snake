type Velocity = -1 | 0 | 1
type Direction = { x: Velocity; y: Velocity }

class Input {
	public direction: Direction
	public lastDirection: Direction
	public restart = false

	constructor() {
		this.direction = { x: 0, y: 0 }

		document.onkeydown = async e => {
			if (~[87, 38].indexOf(e.keyCode) && this.lastDirection?.y !== 1) {
				this.direction = { x: 0, y: -1 }
			} else if (~[65, 37].indexOf(e.keyCode) && this.lastDirection?.x !== 1) {
				this.direction = { x: -1, y: 0 }
			} else if (~[83, 40].indexOf(e.keyCode) && this.lastDirection?.y !== -1) {
				this.direction = { x: 0, y: 1 }
			} else if (~[68, 39].indexOf(e.keyCode) && this.lastDirection?.x !== -1) {
				this.direction = { x: 1, y: 0 }
			} else if (e.keyCode === 82) {
				this.restart = true
			}
		}
	}
}

export const input = new Input()
