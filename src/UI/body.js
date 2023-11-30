import { Project, projectList } from "../modules/projects"
import { Task, taskList } from '../modules/tasks'
import plusIcon from '../styles/plus.png'

const main = document.createElement('main')

const aside = document.createElement('aside')
const taskDiv = document.createElement('div')

main.appendChild(aside)
main.appendChild(taskDiv)

// ESTRUCTURE FOR ASIDE

const projectContainer = document.createElement('div')
projectContainer.classList.add('project-container')

const projectTitle = document.createElement('h2')
projectTitle.classList.add('project-title')
projectTitle.innerText = "Projects"

const projectUl = document.createElement('ul')
projectUl.classList.add("project-ul")


function renderAside(array){
    let projectUlContent = ''
    array.forEach((project)=>{
        projectUl.innerHTML = null
        const projectName = project.name
        projectUlContent += `
        <li class="project-list">
            <div class="project-list-div">
                <input class="project-checkbox" name="project" type="radio" id="${projectName}">
                <label class="project-label" for="${projectName}">${projectName}</label>
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


aside.appendChild(projectContainer)
projectContainer.appendChild(projectTitle)
projectContainer.appendChild(projectUl)
projectContainer.appendChild(projectCreation)
projectCreation.appendChild(projectInput)
projectCreation.appendChild(saveProjectBtn)



// ESTRUCTURA TASKDIV

taskDiv.classList.add('task-div')

const taskContainer = document.createElement('div')
taskContainer.classList.add('task-container')
taskContainer.classList.add('inactive')

const taskTitle = document.createElement('h2')
taskTitle.classList.add('project-title')
taskTitle.innerText = "Tasks"

const taskUl = document.createElement('ul')
taskUl.classList.add("task-ul")


function renderTasks(targetId){     //COMPLETAR
    let taskUlContent = ''
    const targetProject= projectList.find(project=>project.name === targetId)
    if(targetProject){
        console.log(targetProject.tasks)
        targetProject.tasks.forEach((task)=>{
            const taskName = task.name
            const taskDueDate = task.date

            taskUlContent += `
            <li class="task-list-li">
                <div class="task-list-div">
                    <input class="task-checkbox" type="checkbox" id="${taskName}">
                    <label class="task-label" for="${taskName}">${taskName}</label>
                    <p>${taskDueDate}</p>
                </div>
            </li>
            `
        })
    }
    taskUl.innerHTML = taskUlContent
}

// ESTRUCTURA DIV CREACION DE TASK
const taskCreation = document.createElement('div')
taskCreation.classList.add('trask-creation')

const taskInput = document.createElement('input')
taskInput.placeholder = "Add a new Task"
taskInput.id = "inputNewtask"
taskInput.classList.add('task-list')
taskInput.type = "text"

const taskInputDate = document.createElement('input')
taskInputDate.id = "inputNewtaskDate"
taskInputDate.classList.add('task-list-date')
taskInputDate.type = "date"

const saveTaskBtn = document.createElement('img')
saveTaskBtn.classList.add("task-plus")
saveTaskBtn.id = "addTask"
saveTaskBtn.src = plusIcon

taskCreation.appendChild(saveTaskBtn)
taskCreation.appendChild(taskInput)
taskCreation.appendChild(taskInputDate)

taskDiv.appendChild(taskContainer)
taskContainer.appendChild(taskTitle)
taskContainer.appendChild(taskUl)
// PARA LAS TAREAS INYECTADAS
taskContainer.appendChild(taskCreation)

export { main, renderAside, renderTasks }