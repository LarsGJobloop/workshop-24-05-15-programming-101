const taskForm = document.querySelector("#task-input")
const taskSaveButton = document.querySelector("#task-save")
const taskDisplay = document.querySelector("#task-display")

function addTask() {
    const title = taskForm.value

    if (title === "") {
        return
    }

    // Konstruere det nye task objektet
    const newTask = {
        title: title,
        isComplete: false,
    }

    // Konstruer elementer
    const newTaskElement = document.createElement("li")
    newTaskElement.textContent = newTask.title
    taskDisplay.appendChild(newTaskElement)
}

function getAllTasks() {
    console.log("Retrieved all tasks")
}

taskSaveButton.addEventListener("click", addTask)