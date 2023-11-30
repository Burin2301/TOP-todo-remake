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
    const taskInputValue = taskInput
    const taskInputDate = document.getElementById('inputNewtaskDate')
    const newTaskName = taskInput.value
    const newTaskDate = taskInputDate.value
    const projectSelected = document.querySelector('.active-project').id
    if(newTaskName === '')return
    if(taskList.find((task)=>task.name === newTaskName))return
    const newTask = createTask(newTaskName, newTaskDate, projectSelected)
    taskList.push(newTask)
    taskInputValue.value = ""
    taskInputDate.value = ""
    console.log(taskList)
    console.log(projectSelected)
}



function isChecked(targetId){
    const taskListContainer = document.querySelector('.task-container')
    const checkbox = document.querySelector(`#${targetId}`)
    if(checkbox.checked){
        checkbox.classList.add('active-project')
        const targetProject = projectList.find((project)=>project.name === targetId)
        taskListContainer.classList.remove('inactive')
        renderTasks(targetProject)
    }if(!checkbox.checked)checkbox.classList.remove('active-project')
}


export {createNewProject, isChecked, createNewTask}
