import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside } from './UI/body'
import { addTask } from './modules/functions'
import { projectList, saveProjectsInLocalAndRender } from './modules/projects'
import { addProjectAndRenderProjects,  chooseProjectAndRenderItsTasks } from './modules/functions'
import { taskList} from './modules/tasks'

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

