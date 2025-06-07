import { createMarkup } from "./markup-tasks"
import { tasksList } from "./refs"

export const addTask = item => {
    tasksList.insertAdjacentHTML("beforeend", createMarkup(item))
}

export const addTasks = items => {
    tasksList.insertAdjacentHTML("beforeend", items.map(createMarkup).join(""));
}