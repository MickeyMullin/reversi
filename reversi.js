function initBoard() {
  const BOARD_SIZE = 8
  let i
  let j
  let rowDiv
  let cellDiv
  let content
  const parentDiv = document.getElementById('board')
  for (i = 0; i < BOARD_SIZE; ++i) {
    rowDiv = document.createElement('div')
    rowDiv.setAttribute('id', 'r' + i)
    rowDiv.classList.add('board-row')
    for (j = 0; j < BOARD_SIZE; ++j) {
      cellDiv = document.createElement('div')
      cellDiv.setAttribute('id', 'c' + i + j)
      cellDiv.classList.add('board-cell')
      cellDiv.innerText = ''

      content = document.createElement('div')
      content.setAttribute('id', 'd' + i + j)
      content.classList.add('disc')
      const disc = randDisc()
      if (disc) {
        content.classList.add(disc)
      }

      cellDiv.appendChild(content)
      rowDiv.appendChild(cellDiv)
    }
    parentDiv.appendChild(rowDiv)
  }
  if (parentDiv) {
    parentDiv.appendChild
  }
}

function randDisc() {
  const disc = [ '', 'black', 'white' ]
  const rand = Math.floor(Math.random() * 3)
  return disc[rand]
}

window.onload = () => {
  initBoard()
}
