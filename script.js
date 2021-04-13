
//Requisito 2, 3 e 12
function randomColor() {
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);
    const randomColor3 = Math.floor(Math.random() * 255);
    let msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  
    if (msg === 'rgb(255, 255, 255)' || msg === 'rgb(0, 0, 0)') {
      msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    }
  
    return msg;
  }

  function chooseColor (){
    const color = document.getElementsByClassName('color');
    color[0].style.backgroundColor = 'black';
    color[1].style.backgroundColor = randomColor();
    color[2].style.backgroundColor = randomColor();
    color[3].style.backgroundColor = randomColor();
    for (let i = 0; i < color.length; i += 1) {
        let refCOlor = 1;
        if (color[i].style.backgroundColor === color[refCOlor].style.backgroundColor) {
          color[i].style.backgroundColor = randomColor();
        }
        refCOlor += 1;
      }
    }

//Requisito 4
function createLinesAndRows () {
  let board = document.getElementById('pixel-board')
    for (let i =0; i < 5; i+=1){
        pixelRow = document.createElement('div')
        pixelRow.className = 'pixel-row'
        board.appendChild(pixelRow)

        for (let j=0; j < 5; j+= 1){
            pixelCell = document.createElement('div')
            pixelCell.className = 'pixel'
            pixelRow.appendChild(pixelCell)
            pixelCell.style.backgroundColor = 'white'

        }
    }
}

function newCollor() {
  const object = document.querySelector('#color-palette');
  object.addEventListener('click', (event) => {
    const var2 = document.querySelector('.selected');
    if(var2){
      var2.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });


}

    

   

window.onload = () => {
createLinesAndRows()
randomColor()
chooseColor()
newCollor()

}