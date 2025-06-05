const addButtonEl = document.querySelector(".add-button");
const inputFieldEl = document.querySelector(".input-field");
const toDoListEl = document.querySelector(".to-do-list");
const toDoItemEl = document.createElement("li");

function addToDo() {
  //console.log(inputFieldEl.value);
  toDoItemEl.textContent = inputFieldEl.value;
  toDoListEl.appendChild(toDoItemEl);
}

addButtonEl.addEventListener("click", addToDo);
