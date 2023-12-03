import format from "date-fns/format"

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

let taskList = []

// PERSISTENCE

function saveTasksInLocal(infoToStore){
    const key = 'Tasks-List'
    localStorage.setItem(key,JSON.stringify(infoToStore))
}

function recoverLocalTasks(key){
    const recoveredTasks = localStorage.getItem(key)
    return JSON.parse(recoveredTasks)||[]
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
        return {name:name, dueDate:date, project:project}
    }
    if(date!==""){
        const taskInputDate = document.getElementById('inputNewtaskDate')
        const newTaskDate = taskInputDate.value
        const result = formatDate(newTaskDate)
        date = result

    }
    return {name:name, dueDate:date, project:project}
}

export{
    Task,
    taskList,
    createTask,
    saveTasksInLocal,
    recoverLocalTasks,
}