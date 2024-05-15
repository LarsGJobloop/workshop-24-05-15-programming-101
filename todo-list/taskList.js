const tasks = []

/**
 * Adds a new task
 */
export function addTask(task) {
    tasks.push(task)
}

/**
 * Returns all tasks
 */
export function getAllTasks() {
    return tasks
}
