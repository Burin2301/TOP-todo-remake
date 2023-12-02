import './styles/styles.css'
import { header } from './UI/header'
import { main, renderAside, renderTasks } from './UI/body'
import { buttonListener } from './modules/functions'
import { projectList } from './modules/projects'

function renderScreen(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(header)
    contentDiv.appendChild(main)
    renderAside(projectList)
}

document.addEventListener('DOMContentLoaded', renderScreen)

buttonListener()