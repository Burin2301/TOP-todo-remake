class Task{
    constructor(name, dueDate, project){
        this.name = name,
        this.dueDate = dueDate
        this.project = project
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

function createTask(name, date){
    return {name:name, dueDate:date}
}

export { Task, taskList, createTask }