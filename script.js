const selectPalette = document.querySelector('#color-palette');
function createBoxesDiv() {
  const arrayOfColors = ['black', 'blue', 'purple', 'red'];
  for (let index = 0; index < arrayOfColors.length; index += 1) {
    const createDivs = document.createElement('div');
    createDivs.classList.add('color');
    selectPalette.appendChild(createDivs);
  }
  const selectDivs = document.querySelectorAll('.color');
  selectDivs.forEach((element, index) => {
    const div = element; div.style.backgroundColor = arrayOfColors[index];
  });
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}
createBoxesDiv();

function addPixels(size) {
  const selectPixels = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const createPixelsRow = document.createElement('div');
    selectPixels.appendChild(createPixelsRow);
    createPixelsRow.classList.add('pixel');
    createPixelsRow.innerText = 'Row';
    for (let indice = 1; indice < size; indice += 1) {
      const createPixelsColumn = document.createElement('div');
      selectPixels.appendChild(createPixelsColumn);
      createPixelsColumn.classList.add('pixel');
      createPixelsColumn.innerText = 'Column';
    }
  }
}
addPixels(5);

function colorSelectedByClick() {
  const palette = document.querySelector('#color-palette');
  palette.addEventListener('click', (selectColor) => {
    const eventTarget = selectColor.target;
    const color = document.querySelectorAll('.color');
    color.forEach((element) => element.classList.remove('selected'));
    eventTarget.classList.add('selected');
  });
}
colorSelectedByClick();

function addSelecteColordByClick() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', (paintPixel) => {
    const selectedColor = document.querySelector('.selected');
    const eventTarget = paintPixel.target;
    eventTarget.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
  });
}
addSelecteColordByClick();

function clearBoard() {
  const selectButton = document.querySelector('#clear-board');
  selectButton.addEventListener('click', () => {
    const selectPixel = document.querySelectorAll('.pixel');
    selectPixel.forEach((element) => {
      const box = element; box.style.backgroundColor = 'white';
    });
  });
}
clearBoard();

function generateBoard() {
  const selectInput = document.querySelector('#board-size');
  const selectButton = document.querySelector('#generate-board');
  const selectPixels = document.querySelector('#pixel-board');
  selectButton.addEventListener('click', () => {
    if (selectInput.value === '') {
      alert('Board Inválido!');
    } else if (selectInput.value < 5) {
      selectInput.value = 5;
    } else if (selectInput.value > 50) {
      selectInput.value = 50;
    }
    selectPixels.style.backgroundColor = 'white';
    selectPixels.innerHTML = '';
    addPixels(selectInput.value);
  });
}
generateBoard();