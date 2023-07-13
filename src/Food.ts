import { boxSize, ctx, gridHeight, gridWidth } from './config'

export default class Food {
	public x: number
	public y: number

	constructor() {
		this.x = Math.floor(Math.random() * gridWidth)
		this.y = Math.floor(Math.random() * gridHeight)
	}

	show() {
		ctx.fillStyle = 'red'
		ctx.fillRect(this.x * boxSize, this.y * boxSize, boxSize - 1, boxSize - 1)
	}
}
