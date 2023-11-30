import { Project, createProject, projectList } from "./projects"
import { renderTasks } from "../UI/body"
import { createTask, taskList } from "./tasks"

function createNewProject(){
    const projectInput = document.getElementById('inputNewProject')
    const newProjectName = projectInput.value
    if(newProjectName==="")return
    if(projectList.some((project)=>project.name === newProjectName))return
    const newProject = createProject(newProjectName)
    projectList.push(newProject)
    projectInput.value = ''
}

function createNewTask(){
    const taskInput = document.getElementById('inputNewtask')
    const taskInputDate = document.getElementById('inputNewtaskDate')
    const newTaskName = taskInput.value
    if(newTaskName === '')return
    if(taskList.find((task)=>task.name === newTaskName))return
    const newTask = createTask()
    // COMPLETAR
}


function isChecked(targetId){
    const taskListContainer = document.querySelector('.task-container')
    const checkbox = document.querySelector(`#${targetId}`)
    if(checkbox.checked){
        const targetProject = projectList.find((project)=>project.name === targetId)
        taskListContainer.classList.remove('inactive')
        renderTasks(targetProject)
    }
}


export {createNewProject, isChecked, createNewTask}

