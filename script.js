const gridContainer = document.querySelector('#gridContainer');

let gridSize = 16;

makeGrid();

function makeGrid() {
  const pixelSize = (400 - 2) / gridSize;
  for (i = 0; i < gridSize ** 2; i++) {
    const pixel = document.createElement('div');
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);

    pixel.addEventListener('mouseover', (e) => {
      pixel.classList.add('fill');
    });
  }
}


function reset() {
  const reset = document.querySelector('#gridContainer');
  while (reset.firstChild) {
    reset.removeChild(reset.firstChild);
  }
  gridSize = prompt('Enter cells per side here');
  makeGrid();
}
