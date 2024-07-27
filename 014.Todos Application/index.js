/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
    text: "Learn HTML"
},
{
    text: "Learn CSS"
},
{
    text: "Learn JavaScript"
}
];

let containerEl = document.getElementById("todoItemsContainer");


function createAndAppendTodo(todo) {

let taskEl = document.createElement("li");
taskEl.classList.add("todo-item-container", "d-flex", "flex-row");
containerEl.appendChild(taskEl);

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkboxInput";
inputEl.classList.add("checkbox-input");
taskEl.appendChild(inputEl);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");
taskEl.appendChild(labelContainer);

let inputLabel = document.createElement("label");
inputLabel.setAttribute("for", "checkboxInput");
inputLabel.classList.add("checkbox-label");
inputLabel.textContent = todo.text;
labelContainer.appendChild(inputLabel);



let deleteEl = document.createElement("div");
deleteEl.classList.add("delete-icon-container");
labelContainer.appendChild(deleteEl);

let imageEL = document.createElement("i");
imageEL.classList.add("far", "fa-trash-alt", "delete-icon");
deleteEl.appendChild(imageEL);


}


for (let one of todoList) {
createAndAppendTodo(one)
}