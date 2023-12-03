import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside } from './UI/body'
import { addTask } from './modules/functions'
import { projectList, recoverLocalProjects } from './modules/projects'
import { addProjectAndRenderProjects,  chooseProjectAndRenderItsTasks } from './modules/functions'
import { taskList, recoverLocalTasks } from './modules/tasks'

function renderScreen(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(header)
    contentDiv.appendChild(main)
    renderAside(projectList)
}

document.addEventListener('DOMContentLoaded',()=>{
    renderScreen()
    addProjectAndRenderProjects()
    chooseProjectAndRenderItsTasks()
    addTask()
    // taskList = recoverLocalTasks('Tasks-List')
    projectList = recoverLocalProjects('Project-Lists')
})

