class Project{
    constructor(name, tasks){
        this.name = name,
        this.tasks = []
    }
    // SETTER
    setName(name){
        this.name = name
    }
    setTask(newTask){
        this.tasks.push(newTask)
    }
    // GETTER
    getProjectName(){
        return this.name
    }
    getTasks(){
        return this.tasks
    }
}

const projectList = []
const project1 = new Project('project1')
const project2 = new Project('project2')
projectList.push(project1)
projectList.push(project2)

project1.setTask({
    name:"Tarea 1",
    date:"12/10/2023"
})
project1.setTask("Tarea 2")

project2.setTask("Tarea 4")
project2.setTask("Tarea 5")
project2.setTask("Tarea 6")

function createProject(name){
    return {name:name, tasks:[]}
}


export { Project, projectList, createProject }