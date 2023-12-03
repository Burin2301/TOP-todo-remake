import format from "date-fns/format"

class Task{
    constructor(name, dueDate, project, complete){
        this.name = name,
        this.dueDate = dueDate
        this.project = project
        this.complete = false
    }
    // SETTER
    setName(name){
        this.name = name
    }
    setDueDate(date){
        this.dueDate = date
    }
    // GETTER
    getTaskName(){
        return this.name
    }
    getDueDate(){
        return this.dueDate
    }
}

const taskList = []



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
        return {name:name, dueDate:date, project:project}
    }
}

export { Task, taskList, createTask }