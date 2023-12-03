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

function createTask(name, date, project){
    if(date===''){
        const newDate = Date.now()
        const result = format(newDate, 'MM/dd/yyyy')
        date = result
        return {name:name, dueDate:date, project:project}
    }

}

export { Task, taskList, createTask }