let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active");
var showAllButton = document.getElementById("show-all");
var showCompletedButton = document.getElementById("show-completed");

let templateElement = document.getElementById("list-item-template");

let template = templateElement.innerHTML;





function onAddTaskClicked(event) {

    let taskName = newTaskInput.value;

    newTaskInput.value = "";


    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);


    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
}

function showAllTasks() {
    var tasks = document.getElementsByClassName('task');
    for (let i =0; i < tasks.length; i++){
        tasks[i].style.display = 'block'
    }
}

function showCompletedTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){

            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function showActiveTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){

            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "block";
        }
    }
}





function onTodolistClicked(event) {

    let targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }


    let checkbox = targetElement.querySelector(".checkbox");


    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}


 
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);