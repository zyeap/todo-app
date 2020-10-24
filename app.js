//selectors
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("inputBox");
const todoBtn = document.getElementById("inputBtn");
const todoFilter = document.getElementById("filterDropdown");

//event listeners
todoBtn.addEventListener("click", addItem);
todoList.addEventListener("click", checkItem);
todoFilter.addEventListener("click", filterItem);

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

function checkItem(e){
    let item = e.target
    if (item.classList[0] == "completedBtn"){
        item.parentElement.classList.toggle("completed");
    }

    if (item.classList[0] == "trashBtn"){
        item.parentElement.remove();
    }
}

function filterItem(e){
    const allItems = todoList.childNodes;
    allItems.forEach(item => {
        switch (e.target.value){
            case "all":
                item.style.display = "flex";
                break;
            case "done":
                if (item.classList.contains("completed")){
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!item.classList.contains("completed")){
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
        }
    })
}