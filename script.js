const addButtonEl = document.querySelector(".add-button");
const inputFieldEl = document.querySelector(".input-field");
const toDoListEl = document.querySelector(".to-do-list");
let toDoCounter = 0;

function addToDo() {
  toDoCounter++;

  const toDoListItemEl = document.createElement("li");

  const checkboxInputEl = document.createElement("input");
  checkboxInputEl.type = "checkbox";
  checkboxInputEl.id = `item--${toDoCounter}`;

  const chechboxLabelEl = document.createElement("label");
  chechboxLabelEl.htmlFor = `item--${toDoCounter}`;
  chechboxLabelEl.textContent = ` ${inputFieldEl.value}`;

  const deleteIconEl = document.createElement("img");
  deleteIconEl.src = "./images/delete.png";
  deleteIconEl.classList.add("delete-icon");

  toDoListItemEl.appendChild(checkboxInputEl);
  toDoListItemEl.appendChild(chechboxLabelEl);
  toDoListItemEl.appendChild(deleteIconEl);
  toDoListEl.appendChild(toDoListItemEl);

  inputFieldEl.value = "";
}

addButtonEl.addEventListener("click", addToDo);
