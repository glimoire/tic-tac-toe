const X_CLASS = 'x'
const O_CLASS = 'o'

const cellElements = document.querySelectorAll('[data-cell]')
let oTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}