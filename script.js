const container_div = document.querySelector("div.container");

const row_container = document.createElement("div");
row_container.setAttribute("class", "row_container");

const etch_a_sketch_cell = document.createElement("div");
etch_a_sketch_cell.classList.add("etch_a_sketch_cell");
etch_a_sketch_cell.setAttribute("onmouseover", "hover_handler(event)")
 
for (let  j = 0; j < 36; j++) {
    const cell_copy = etch_a_sketch_cell.cloneNode(true);
    row_container.appendChild(cell_copy);
    console.log("hello");
}

for (let i = 0; i < 36; i++) {
    container_div.appendChild(row_container.cloneNode(true));
}

function hover_handler(event) {
    event.target.style.backgroundColor="black";
}