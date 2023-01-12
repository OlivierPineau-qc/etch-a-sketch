const container = document.getElementById("gridContainer");

const containerWidth = 560;
let numberOfSides = 16;
// mouseDown tracker
let isMouseDown = false;

const squaresButton = document.getElementById("squares")

squaresButton.addEventListener("click", (e) => {
  let number = prompt("How many Squares per Side ? Ex: 64 will yield 64x64")

  while(number > 100) {
    number = prompt("The limit is 100, select a number below 100.")
  }
  while(number === "") {
    number = prompt("It can't be empty, enter a number between 0 and 100")
  }

  numberOfSides = parseInt(number)

  container.innerHTML = '';
  buildGrid(numberOfSides)
})

function buildGrid(sides) {
  for(let i = 0; i < numberOfSides; i++) {
    for(let j = 0; j < numberOfSides; j++) {
      const divCol = document.createElement("div")
      divCol.style.width = (containerWidth / numberOfSides) + "px"
      divCol.style.height = (containerWidth / numberOfSides) + "px"
      container.appendChild(divCol)
    }
  }
}
buildGrid(numberOfSides)

window.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  e.preventDefault();
  if(e.target.parentElement.id == "girdContainer") {
    e.target.classList.add("active")
  }
})

window.addEventListener("mouseup", (e) => {
  isMouseDown = false;
})

container.addEventListener('mouseover', (event) => {
  if(event.target.id !== "gridContainer" && isMouseDown) {
    event.target.classList.add("active")
  }
});

// reset button
const resetButt = document.getElementById("reset");
resetButt.addEventListener("click", (event) => {
  container.innerHTML = '';
  buildGrid(numberOfSides)
});