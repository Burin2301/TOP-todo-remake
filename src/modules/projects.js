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

// PERSISTENCE

function saveProjectsInLocal(infoToStore){
    const key = 'Projects-List'
    localStorage.setItem(key,JSON.stringify(infoToStore))
}
function recoverLocalProjects(key){
    const recoveredProjects = localStorage.getItem(key)
    return JSON.parse(recoveredProjects)||[]
}




const project1 = new Project('Default')
projectList.push(project1)


function createProject(name){
    return {name:name, tasks:[]}
}


export{
    Project,
    projectList,
    createProject,
    saveProjectsInLocal,
    recoverLocalProjects,
}