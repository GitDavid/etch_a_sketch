const container = document.getElementById("container");

function createGrid(gridSize) {
    container.style.setProperty('--numBoxes', gridSize);
    container.style.setProperty('--pxBoxes', Math.floor(960/gridSize)+'px');
    
    for (let i = 0; i < gridSize**2; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    setInkColor();
}

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {    
    const size = window.prompt("How big would you like your sketchpad to be?");
    if (!size || !parseInt(size)) {
        window.alert(size + " is not a valid number");
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(parseInt(size));
    }
});

const clear = document.getElementById("clear");
const gridItems = document.getElementsByClassName("grid-item");

clear.addEventListener("click", clearGrid);

function clearGrid() {
    Array.prototype.forEach.call(gridItems, (item) => {item.style.backgroundColor = 'white'});
}

const colorPicker = document.getElementById("colorpicker");
colorPicker.addEventListener("change", setInkColor);

function setInkColor() {
    const gridItems = document.getElementsByClassName("grid-item");
    const color = colorPicker.value;
    Array.prototype.forEach.call(gridItems, (item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = color;
        });
    });
}

createGrid(20);