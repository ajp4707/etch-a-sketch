// -------------------- Create DOM Object templates to insert --------------
const container_div = document.querySelector("div.etch-container");

const row_container = document.createElement("div");
row_container.setAttribute("class", "row_container");

const etch_a_sketch_cell = document.createElement("div");
etch_a_sketch_cell.classList.add("etch_a_sketch_cell");
etch_a_sketch_cell.setAttribute("onmouseover", "hover_handler(event)")



// -------------------------- Functions and Event Handlers Begin ----------------------------

function populateEtchField(dimension) {

    // Remove all children nodes
    container_div.innerHTML = "";
    row_container.innerHTML = "";

    for (let  j = 0; j < dimension; j++) {
        const cell_copy = etch_a_sketch_cell.cloneNode(true);
        row_container.appendChild(cell_copy);
    }

    for (let i = 0; i < dimension; i++) {
        container_div.appendChild(row_container.cloneNode(true));
    }
}

function hover_handler(event) {
    event.target.style.backgroundColor="black";
}

function button_click_handler(event) {
    let grid_dimension = undefined;
    while (!Number.isInteger(+grid_dimension) || grid_dimension < 0 || grid_dimension > 100) {
        grid_dimension = prompt("Please enter a positive integer less than 100:", "20");
        if (grid_dimension === null) return;
    }

    populateEtchField(grid_dimension)
}

// -------------------------- Page initialization ----------------------------------

const STARTING_DIMENSION = 36

populateEtchField(STARTING_DIMENSION)

const button = document.querySelector("button");
button.addEventListener("click", button_click_handler)

