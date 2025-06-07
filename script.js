const addButtonEl = document.querySelector(".add-button");
const inputFieldEl = document.querySelector(".input-field");
const toDoListEl = document.querySelector(".to-do-list");
let toDoCounter = 0;

function addToDo() {
  toDoCounter++;
  const toDoListItemEl = createToDoListItem(toDoCounter);
  toDoListEl.appendChild(toDoListItemEl);

  inputFieldEl.value = "";
}

function createCheckboxInput(toDoCounter) {
  const checkboxInputEl = document.createElement("input");
  checkboxInputEl.type = "checkbox";
  checkboxInputEl.id = `item--${toDoCounter}`;
  return checkboxInputEl;
}

function createChechboxLabel(toDoCounter) {
  const chechboxLabelEl = document.createElement("label");
  chechboxLabelEl.htmlFor = `item--${toDoCounter}`;
  chechboxLabelEl.textContent = ` ${inputFieldEl.value}`;
  return chechboxLabelEl;
}

function createDeleteIcon() {
  const deleteIconEl = document.createElement("img");
  deleteIconEl.src = "./images/black delete icon.png";
  deleteIconEl.classList.add("delete-icon");

  deleteIconEl.addEventListener("mouseover", () => {
    console.log(deleteIconEl);
    deleteIconEl.src = "./images/red delete icon.png";
  });

  deleteIconEl.addEventListener("mouseout", () => {
    console.log(deleteIconEl);
    deleteIconEl.src = "./images/black delete icon.png";
  });

  return deleteIconEl;
}

function createToDoListItem(toDoCounter) {
  const toDoListItemEl = document.createElement("li");
  chechboxInputEl = createCheckboxInput(toDoCounter);
  chechboxLabelEl = createChechboxLabel(toDoCounter);
  deleteIconEl = createDeleteIcon();

  toDoListItemEl.appendChild(checkboxInputEl);
  toDoListItemEl.appendChild(chechboxLabelEl);
  toDoListItemEl.appendChild(deleteIconEl);

  return toDoListItemEl;
}

addButtonEl.addEventListener("click", addToDo);

//brisanje <li> klikom na delete ikonicu
toDoListEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-icon")) {
    const li = e.target.closest("li");
    if (li) {
      li.remove();
    }
  }
});
