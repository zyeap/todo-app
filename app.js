//selectors
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("inputBox");
const todoBtn = document.getElementById("inputBtn");

//event listeners
todoBtn.addEventListener("click", addItem);

//functions
function addItem(e){
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem);

    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completedBtn");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}