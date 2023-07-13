import { input } from './Input'
import { boxSize, ctx, gridHeight, gridWidth } from './config'

type Segment = { x: number; y: number }

export default class Snake {
	public body: Segment[]
	public head: Segment
	public tail: Segment

	constructor() {
		this.body = [
			{
				x: Math.floor(Math.random() * gridWidth),
				y: Math.floor(Math.random() * gridHeight)
			}
		]
		this.head = this.body[0]
	}

	update() {
		this.body.unshift({ x: this.head.x + input.direction.x, y: this.head.y + input.direction.y })
		this.body.pop()

		this.head = this.body[0]
		this.tail = this.body[this.body.length - 1]
	}

	eat() {
		this.body.push({ x: this.tail.x, y: this.tail.y })
	}

	show() {
		ctx.fillStyle = '#0f0'
		for (let box of this.body) {
			ctx.fillRect(box.x * boxSize, box.y * boxSize, boxSize - 1, boxSize - 1)
		}
	}
}
