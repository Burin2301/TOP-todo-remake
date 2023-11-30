import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside, renderTasks } from './UI/body'
import { createNewProject, createNewTask, isChecked } from './modules/functions'
import { projectList } from './modules/projects'

function renderScreen(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(header)
    contentDiv.appendChild(main)
    renderAside(projectList)
}

document.addEventListener('click', (e)=>{
    if(e.target.id=== 'addProject'){
        createNewProject()
        renderAside(projectList)
    }
    if(e.target.id === 'addTask'){
        createNewTask()
        renderTasks()
    }
    if(e.target.className == 'project-checkbox'){
        const targedId = e.target.id
        isChecked(targedId)
    }
})
console.log(projectList.getTasks)

document.addEventListener('DOMContentLoaded', renderScreen)




