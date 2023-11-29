import { Project, projectList } from "../modules/projects"
import { Task, taskList } from '../modules/tasks'
import plusIcon from '../styles/plus.png'

const main = document.createElement('main')

const aside = document.createElement('aside')
const taskDiv = document.createElement('div')

main.appendChild(aside)
main.appendChild(taskDiv)

// ESTRUCTURE FOR ASIDE

const projectTitle = document.createElement('h2')
projectTitle.classList.add('project-title')

const projectUl = document.createElement('ul')
projectUl.classList.add("project-container")


function renderAside(array){
    let projectUlContent = ''
    array.forEach((project)=>{
        projectUl.innerHTML = null
        const projectName = project.name
        projectUlContent += `
        <li class="project-list" data-selected-project>
            <div class="project-list-div">
                ${projectName}
            </div>
        </li>
        `
    })
    projectUl.innerHTML = projectUlContent
}

// CONTENIDO DEL DIV DONDE SE CREA EL PROJECT
const projectCreation = document.createElement('div')
projectCreation.classList.add('input-task-div')

const projectInput = document.createElement('input')
projectInput.placeholder = "Add a new Project"
projectInput.id = "inputNewProject"
projectInput.classList.add('project-list')
projectInput.type = "text"

const saveProjectBtn = document.createElement('img')
saveProjectBtn.classList.add("project-plus")
saveProjectBtn.id = "addProject"
saveProjectBtn.src = plusIcon


aside.appendChild(projectUl)
aside.appendChild(projectCreation)
projectCreation.appendChild(projectInput)
projectCreation.appendChild(saveProjectBtn)



export { main, renderAside }