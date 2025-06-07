import { addToLocalStorage, getFromLocalStorage } from "./local-storage-api";
import { tasksList } from "./refs";
import { addTask } from "./render-tasks";

export const createTask = event => {
    event.preventDefault();
    const { taskName, taskDescription } = event.currentTarget.elements;
    const task = {title: taskName.value, text: taskDescription.value, id: Date.now()}
    addTask(task);

    const data = getFromLocalStorage();
    data.push(task);
    addToLocalStorage(data);
}