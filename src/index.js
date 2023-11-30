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



document.addEventListener('DOMContentLoaded', renderScreen)




document.addEventListener('click', function(e){
    if(e.target.id=== 'addProject'){
        taskUl.innerHTML=""
        createNewProject()
        renderAside(projectList)
    }
    if(e.target.className == 'project-checkbox'){
        const targetId = e.target.id
        isChecked(targetId)
        renderTasks(targetId)

    }
    if(e.target.id === 'addTask'){

        createNewTask()
        renderTasks('project2')
    }

})