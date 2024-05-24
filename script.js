let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
