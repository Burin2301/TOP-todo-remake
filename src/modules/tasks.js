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

function createTask(name, date, project){
    return {name:name, dueDate:date, project:project}
}

export { Task, taskList, createTask }