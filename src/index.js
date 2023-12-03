import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside } from './UI/body'
import { addTask } from './modules/functions'
import { projectList } from './modules/projects'
import { addProjectAndRenderProjects,  chooseProjectAndRenderItsTasks } from './modules/functions'

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
})

