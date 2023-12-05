class Task {
  constructor(id, name, dueDate, project) {
    (this._id = id), (this._name = name), (this._dueDate = dueDate);
    this._project = project;
    this._complete = false;
  }
  // SETTER
  setName(name) {
    this._name = name;
  }
  setDueDate(date) {
    this._dueDate = date;
  }

  // GETTER
  getTaskName() {
    return this._name;
  }
  getDueDate() {
    return this._dueDate;
  }
}

// I CREATE KEY FOR LOCAL STORAGE
const LOCAL_STORAGE_TASK_KEY = "tasks.list";
let taskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];

// PERSISTENCE

function saveTasksInLocalandRender() {
  localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(taskList));
}

function formatDate(date) {
  const formattedDate = new Date(date);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return formattedDate.toLocaleDateString(undefined, options);
}

function createTask(id, name, date, project) {
  if (date === "") {
    const newDate = Date.now();
    const result = formatDate(newDate);
    date = result;
  }
  if (date !== "") {
    const result = formatDate(date);
    date = result;
  }
  const newTask = new Task(id, name, date, project);
  return newTask;
}

export { Task, taskList, createTask, saveTasksInLocalandRender };
