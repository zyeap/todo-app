//selectors
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("inputBox");
const todoBtn = document.getElementById("inputBtn");
const todoFilter = document.getElementById("filterDropdown");
const todoSearch = document.getElementById("searchBox");
const todoLabel = document.getElementById("labelText");
const todoTheme = document.querySelectorAll(".themeBtn").forEach(button => {
    button.addEventListener("click", changeTheme);
})

//event listeners
todoBtn.addEventListener("click", addItem);
todoList.addEventListener("click", checkItem);
todoFilter.addEventListener("click", filterItem);
todoSearch.addEventListener("input", searchItem)

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

function searchItem(e){
    const allItems = todoList.childNodes;
    allItems.forEach(item => {
        lowerText = item.innerText.toLowerCase();
        if (lowerText.includes(e.target.value.toLowerCase())){
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}

function changeTheme(e){
    if (e.target.value == "dark"){
        document.body.style.backgroundColor = "black";
        todoLabel.style.color = "white";
        todoList.style.color = "white";
    }

    if (e.target.value == "light"){
        document.body.style.backgroundColor = "white";
        todoLabel.style.color = "black";
        todoList.style.color = "black";
    }
}