const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const victoryMessageElement = document.getElementById('victoryMessage')
const victoryMessageTextElement = document.querySelector('[data-victory-message-text]')
let oTurn

startGame()

function startGame() {
    oTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    }
    //
    swapTurns()
    setBoardHoverClass()
}

function endGame(draw) {
    if (draw) {

    } else {
        victoryMessageTextElement.innerText = '${oTurn ? "The Noughts":"The Crosses"} Win!'
        victoryMessageElement.classList.add('show')
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    oTurn = !oTurn
}

function setBoardHoverClass () {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (oTurn) {
        board.classList.add(O_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBOS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}