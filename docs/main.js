const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const boxSize = 16

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)
const fieldWidth = Math.floor(width / boxSize - 1)
const fieldHeight = Math.floor(height / boxSize - 1)

const snake = [
  {
    x: Math.floor(Math.random() * fieldWidth),
    y: Math.floor(Math.random() * fieldHeight)
  }
]

let food = {
  x: Math.floor(Math.random() * fieldWidth),
  y: Math.floor(Math.random() * fieldHeight)
}

let key
let pressedKey
let delay = 100

let started = false

document.addEventListener('keydown', (e) => {
  let boofKey

  if (~[87, 38].indexOf(e.keyCode)) boofKey = 'w'
  if (~[65, 37].indexOf(e.keyCode)) boofKey = 'a'
  if (~[83, 40].indexOf(e.keyCode)) boofKey = 's'
  if (~[68, 39].indexOf(e.keyCode)) boofKey = 'd'

  if (!~'wasd'.indexOf(boofKey)) return
  if (started) {
    if (Math.abs('wasd'.indexOf(boofKey) - 'wasd'.indexOf(pressedKey)) === 2)
      return
    key = boofKey
    return
  }
  key = boofKey
  started = true
  requestAnimationFrame(update)
  return
})

const update = () => {
  ctx.clearRect(0, 0, width, height)

  // logic
  pressedKey = key

  if (snake.slice(3).find((el) => el.x === snake[0].x && el.y === snake[0].y)) {
    location.reload()
    started = false
    return
  }

  if (key === 'w') snake.unshift({ x: snake[0].x, y: snake[0].y - 1 })
  else if (key === 'a') snake.unshift({ x: snake[0].x - 1, y: snake[0].y })
  else if (key === 's') snake.unshift({ x: snake[0].x, y: snake[0].y + 1 })
  else if (key === 'd') snake.unshift({ x: snake[0].x + 1, y: snake[0].y })

  if (snake[0].x === food.x && snake[0].y === food.y) {
    food = {
      x: Math.floor(Math.random() * fieldWidth),
      y: Math.floor(Math.random() * fieldHeight)
    }
    delay -= delay * 0.05
  } else if (key) snake.pop()

  // snake
  ctx.fillStyle = '#0f0'
  for (let box of snake) {
    ctx.fillRect(box.x * boxSize, box.y * boxSize, boxSize - 1, boxSize - 1)
  }

  // food
  ctx.fillStyle = '#f00'
  ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize)

  //update
  setTimeout(() => {
    if (started) requestAnimationFrame(update)
  }, delay)
}

requestAnimationFrame(update)
