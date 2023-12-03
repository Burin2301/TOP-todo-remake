import { renderAside } from "../UI/body"

class Project{
    constructor(name, tasks){
        this._name = name,
        this._tasks = []
    }
    // SETTER
    setName(name){
        this._name = name
    }
    setTask(newTask){
        this._tasks.push(newTask)
    }
    // GETTER
    getProjectName(){
        return this._name
    }
    getTasks(){
        return this._tasks
    }
}

// I CREATE KEY FOR LOCAL STORAGE
const LOCAL_STORAGE_PROJECT_KEY = 'projects.list'
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY))||[]

// PERSISTENCE

function saveProjectsInLocalAndRender(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(projectList))
    renderAside(projectList)
}

function createProject(name){
    const newProject = new Project(name)
    return newProject
}


export{
    Project,
    projectList,
    createProject,
    saveProjectsInLocalAndRender,
}