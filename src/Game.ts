import Food from './Food'
import { input } from './Input'
import Snake from './Snake'
import { ctx, delay, height, width } from './config'

class Game {
	private snake: Snake
	private food: Food

	constructor() {
		this.snake = new Snake()
		this.food = new Food()
	}

	start() {
		setInterval(() => {
			this.update()
			this.show()
		}, delay)
	}

	restart() {
		this.snake = new Snake()
		this.food = new Food()

		input.direction = { x: 0, y: 0 }
		input.lastDirection = { x: 0, y: 0 }
	}

	update() {
		if (input.restart) {
			input.restart = false
			this.restart()
		}

		input.lastDirection = input.direction

		this.snake.update()

		if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
			this.snake.eat()
			this.food = new Food()
		}

		for (let i = 4; i < this.snake.body.length; i++) {
			if (this.snake.body[i].x === this.snake.head.x && this.snake.body[i].y === this.snake.head.y) {
				console.log(this.snake.body[i], this.snake.head, i)

				this.restart()
			}
		}
	}

	show() {
		ctx.clearRect(0, 0, width, height)
		this.food.show()
		this.snake.show()
	}
}

const game = new Game()

game.start()
