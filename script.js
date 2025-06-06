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

  toDoListItemEl.appendChild(checkboxInputEl);
  toDoListItemEl.appendChild(chechboxLabelEl);
  toDoListEl.appendChild(toDoListItemEl);

  inputFieldEl.value = "";
}

addButtonEl.addEventListener("click", addToDo);
