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
const project1 = new Project('Default')
projectList.push(project1)


function createProject(name){
    return {name:name, tasks:[]}
}


export { Project, projectList, createProject }