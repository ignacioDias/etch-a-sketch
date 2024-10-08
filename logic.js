const grid = document.querySelector("#container");

let mode = "rainbow";
let verticalSize = 14;
let horizontalSize = 14;
let currentColor = "red";

function setCurrentColor(newColor) {
    currentColor = newColor
    mode = "color";
}

function createGrid() {
    grid.innerHTML = "";
    grid.style.gridTemplateRows = `repeat(${verticalSize}, 1fr)`; // Definir las filas
    grid.style.gridTemplateColumns = `repeat(${horizontalSize}, 1fr)`; // Definir las columnas

    for (let i = 0; i < verticalSize * horizontalSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    }
}

createGrid();
const changeGridSize = document.querySelector("#change-size");
changeGridSize.addEventListener("click", () => {
    verticalSize = parseInt(prompt("Set vertical size"), 10);
    horizontalSize = parseInt(prompt("Set horizontal size"), 10);
    if(isNaN(verticalSize) || isNaN(horizontalSize) || horizontalSize <= 0 || verticalSize <= 0) {
        verticalSize = 14;
        horizontalSize = 14;
        alert("invalid inputs!");
    }
    createGrid();
});

const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const changeColor = document.querySelector("#change-color");

reset.addEventListener("click", ()=>{createGrid();});
rainbow.addEventListener("click", ()=>{mode="rainbow";});
eraser.addEventListener("click", ()=>{mode="eraser";});
changeColor.oninput = (e) => setCurrentColor(e.target.value)

function getRandomColor() {
    return Math.floor(Math.random() * 256);
}
grid.addEventListener("mouseover", (event) => {
    const currentDiv = event.target;
    if(mode == "rainbow") {
        currentColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    } else if(mode == "eraser") {
        currentColor = "rgb(228, 228, 228)";
    }
    currentDiv.style.backgroundColor = currentColor;
});

