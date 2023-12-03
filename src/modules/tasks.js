import { renderTasks } from "../UI/body"

class Task{
    constructor(name, dueDate, project, complete){
        this._name = name,
        this._dueDate = dueDate
        this._project = project
        this._complete = false
    }
    // SETTER
    setName(name){
        this._name = name
    }
    setDueDate(date){
        this._dueDate = date
    }

    // GETTER
    getTaskName(){
        return this._name
    }
    getDueDate(){
        return this._dueDate
    }
}

// I CREATE KEY FOR LOCAL STORAGE
const LOCAL_STORAGE_TASK_KEY = "tasks.list"
let taskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY))||[]

// PERSISTENCE

function saveTasksInLocalandRender(){
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY,JSON.stringify(taskList))
}


function formatDate(date){
    const formattedDate = new Date(date)
    const options = {year: 'numeric', month:"2-digit", day:"2-digit"}
    return formattedDate.toLocaleDateString(undefined, options)
}


function createTask(name, date, project){
    if(date===''){
        const newDate = Date.now()
        const result = formatDate(newDate)
        date = result
        const newTask = new Task(name, date, project)
        return newTask
    }
    if(date!==""){
        const taskInputDate = document.getElementById('inputNewtaskDate')
        const newTaskDate = taskInputDate.value
        const result = formatDate(newTaskDate)
        date = result
        const newTask = new Task(name, date, project)
        return newTask
    }
    return {name:name, dueDate:date, project:project}
}

export{
    Task,
    taskList,
    createTask,
    saveTasksInLocalandRender,
}