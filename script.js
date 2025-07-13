function addButtonListener(squareDiv) {
    squareDiv.addEventListener("mouseover", (event) => {
        // console.log(event);
        const square = event.target;
        square.classList.toggle("active");
    })
}

const container = document.querySelector("#container");
const GRID_SIZE = 400;

function createGrid(size) {
    const dim = Math.round(GRID_SIZE / size);
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }
    for (let row = 0; row <= size; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.style.flex = `0 0 ${dim}px`;;
        for (let col = 0; col <= size; col++) {
            const id = `${row}${col}`;
            const square = document.createElement("div");
            square.classList.add("square");
            square.id = id;
            square.style.flex = `0 0 ${dim}px`;
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
        addButtonListener(rowDiv);
    }
}


const gridSubmit = document.querySelector("#gridSubmit");
gridSubmit.addEventListener("click", () => {
    const gridSize = document.querySelector("#size").value;
    if (gridSize <= 0 || gridSize >= 101) {
        document.querySelector("#error-message").textContent = "You can only enter numbers between 1 and 100";
        return;
    }
    document.querySelector("#error-message").textContent = `Created grid of size ${gridSize}x${gridSize}`;
    createGrid(gridSize);
});

createGrid(16);