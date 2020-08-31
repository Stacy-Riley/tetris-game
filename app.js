//alert("Hi")
document.addEventListener('DOMContentLoaded', () => {
  //This is how to connect to the div w/class grid in html
  const grid = document.querySelector('.grid')

  //Array.from() collects all 200 divs and turns into an array
  let squares = Array.from(document.querySelectorAll('.grid div'))
const ScoreDisplay = document.querySelector('#score')
const StartBtn = document.querySelector('#start-button')

  const width = 10

//The Tetrominoes
const jrTetromino = [
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
]

const jlTetromino = [
  [0, 1, width+1, width*2+1],
  [width, width+1, width+2, width*2],
  [1, width+1, width*2+1, width*2+2],
  [width*2, width*2+1, width*2+2, width+2]
]

const sTetromino = [
  [width+1, width+2, width*2, width*2+1],
  [0, width, width+1, width*2+1],
  [width+1, width+2, width*2, width*2+1],
  [0, width, width+1, width*2+1]
]

const zTetromino = [
  [width, width+1, width*2+1, width*2+2],
  [2, width+1, width+2, width*2+1],
  [width, width+1, width*2+1, width*2+2],
  [2, width+1, width+2, width*2+1]
]

const tTetromino = [
  [1, width, width+1, width+2],
  [1, width+1, width+2, width*2+1],
  [width, width+1, width+2, width*2+1],
  [1, width, width+1, width*2+1]
]

const bTetromino = [
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1]
]

const lTetromino = [
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3],
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3]
]

const theTetrominos = [jrTetromino, jlTetromino, sTetromino, zTetromino, tTetromino, bTetromino, lTetromino]

let currentPosition = 4
let currentRotation = 0

//randomly select a Tetromino and its first rotation
let random = Math.floor(Math.random()*theTetrominos.length)
let current = theTetrominos[random][currentRotation]

//draw the Tetromino
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino')
  })
}

//undraw the Tetromino
function undraw() {}




//44:21 minutes into video
  //code goes here
})
