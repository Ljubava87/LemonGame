const board = document.querySelector('#board')
const SQUARES_NUMBER = 1000
const colors = ['#e2f13e', '#fdb664', '#b18518', '#795a05', 'white']
for(let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))
square.addEventListener('mouseleave', () => removeColor(square))


board.append(square)



}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} ` 
}

function removeColor(element){
   element.style.backgroundColor = '#d7df7f' 
   element.style.boxShadow = `0 0 1px #aaaaaa` 
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
return colors[index]
}