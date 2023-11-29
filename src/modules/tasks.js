class Task{
    constructor(taskName, dueDate){
        this.taskName = taskName,
        this.dueDate = dueDate
    }
    // SETTER
    setName(name){
        this.taskName = name
    }
    setDueDate(date){
        this.dueDate = date
    }
    // GETTER
    getTaskName(){
        return this.taskName
    }
    getDueDate(){
        return this.dueDate
    }
}

const taskList = []

export { Task, taskList }