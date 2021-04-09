window.onload = function() {
  createLineSquares(5);
}

//cria uma linha de quadrados
function createLineSquares(lineLength) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let lineIndex = 0; lineIndex < lineLength; lineIndex += 1) {
    let squares = [];
    let lines = [];
    lines[lineIndex] = document.createElement('div');
    lines[lineIndex].className = 'container';
    pixelBoard.appendChild(lines[lineIndex]);
    for (let index = 0; index < lineLength; index += 1) {
      squares[index] = document.createElement('div');
      squares[index].className = 'pixel color';
      lines[lineIndex].appendChild(squares[index]);
    }
  }
  
}
