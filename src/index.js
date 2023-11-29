import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside } from './UI/body'
import { createNewProject } from './modules/functions'
import { projectList } from './modules/projects'

function renderScreen(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(header)
    contentDiv.appendChild(main)
    renderAside(projectList)
}

document.addEventListener('click', (e)=>{
    if(!e.target.id=== 'addProject')return
    if(e.target.id=== 'addProject'){
        createNewProject()
        renderAside(projectList)
    }
})

document.addEventListener('DOMContentLoaded', renderScreen)




