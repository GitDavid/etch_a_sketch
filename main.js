const container = document.getElementById("container");

function createGrid(gridSize) {
    container.style.setProperty('--numBoxes', gridSize);
    container.style.setProperty('--pxBoxes', Math.floor(960/gridSize)+'px');
    
    for (let i = 0; i < gridSize**2; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
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

createGrid(20);