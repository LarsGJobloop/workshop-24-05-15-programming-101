import * as taskList from './taskList.js'

const form = document.getElementById("todo-form")
const input = document.querySelector("form > input")
const list = document.getElementById("todo-list")

/**
 * Updates the DOM with the given tasks
 */
function renderTasks(tasks) {
    list.innerHTML = null
    for (const task of tasks) {
        const newTask = createTaskCard(task)
        list.appendChild(newTask)
    }
}

/**
 * Creates a new DOM element from a task object
 */
function createTaskCard(task) {
    const container = document.createElement("li")
    container.textContent = task.title

    return container
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target
    const value = input.value

    const newTask = {
        title: value
    }

    taskList.addTask(newTask)
    const updatedTasks = taskList.getAllTasks()

    renderTasks(updatedTasks)

    form.reset()
})
