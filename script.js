/**
 * Cria um elemento div e atribui a ele a classe 'pixel'.
 */
function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}
/**
 * Cria quadro de pixels com 'num' linhas e 'num' colunas.
 */
function createPixelBoard(num) {
  const board = document.getElementById('pixel-board');
  for (let row = 0; row < num; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    for (let column = 0; column < num; column += 1) {
      pixelRow.appendChild(createPixel());
    }
    board.appendChild(pixelRow);
  }
}
// createPixelBoard(5); // inicia o quadro com num=5.

/**
 * Coloca classe 'selected' no elemento através de event.target, ou seja, o alvo do evento, ou ainda, que disparou o evento.
 */
function selectedColor(event) {
  const selectedElementColor = event.target;
  const currentElementColor = document.querySelector('.selected'); // busca elemento com classe 'selected'
  if (currentElementColor !== null) { // se existir algum elemento com classe 'selected', ela é removida
    currentElementColor.classList.remove('selected');
  }
  selectedElementColor.classList.add('.selected'); // adiciona a classe 'selected' no alvo (que disparou) do evento
}
/**
 * Captura o background color do elemento com a classe 'selected' e aplica no elemento que disparou o evento.
 * Ref: https://zellwk.com/blog/css-values-in-js/
 */
function colorSelectedPixel(event) {
  const pixel = event.target;
  const currentElementColor = document.querySelector('.selected');
  const style = getComputedStyle(currentElementColor);
  pixel.style.backgroundColor = style.backgroundColor;
}

window.onload = function init() {
  createPixelBoard(5);
  const initialColor = document.querySelector('.color');
  initialColor.classList.add('selected');
  selectedColor('click');
  colorSelectedPixel('click');
};
