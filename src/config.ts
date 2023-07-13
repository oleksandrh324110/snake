export const canvas = document.getElementById('canvas') as HTMLCanvasElement
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

export const boxSize = 16

export const width = (canvas.width = window.innerWidth)
export const height = (canvas.height = window.innerHeight)
export const gridWidth = Math.floor(width / boxSize - 1)
export const gridHeight = Math.floor(height / boxSize - 1)

export const delay = 100
