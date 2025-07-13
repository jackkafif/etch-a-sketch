function addButtonListener(squareDiv) {
    squareDiv.addEventListener("mouseover", (event) => {
        // console.log(event);
        const square = event.target;
        square.classList.toggle("active");
    })
}

const container = document.querySelector("#container")
for (let row = 0; row <= 15; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let col = 0; col <= 15; col++) {
        const id = `${row}${col}`;
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = id;
        rowDiv.appendChild(square);
    }
    container.appendChild(rowDiv);
    addButtonListener(rowDiv);
}