import { Project, createProject, projectList } from "./projects"
import { renderTasks, renderAside } from "../UI/body"
import { createTask, taskList } from "./tasks"
import format from "date-fns/format"

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
    const date = taskInputDate.value
    const taskInputValue = taskInput
    const newTaskName = taskInput.value
    const projectSelected = document.querySelector('.active-project').id
    if(newTaskName === '')return
    if(taskList.find((task)=>task.name === newTaskName))return
    const newTask = createTask(newTaskName, date, projectSelected)
    taskList.push(newTask)
    pushTaskIntoProjects(newTask)
    taskInputValue.value = ""
    taskInputDate.value = ""
}



function isChecked(targetId){
    const taskListContainer = document.querySelector('.task-container')
    const checkbox = document.querySelector(`#${targetId}`)
    if(!checkbox.checked)checkbox.classList.remove('active-project')
    if(checkbox.checked){
        checkbox.classList.add('active-project')
        const targetProject = projectList.find((project)=>project.name === targetId)
        taskListContainer.classList.remove('inactive')
        renderTasks(targetProject)
    }
}

function addProjectAndRenderProjects(){
    const addProjectBtn = document.getElementById('addProject')
    addProjectBtn.addEventListener('click', ()=>{
        createNewProject()
        renderAside(projectList)
        chooseProjectAndRenderItsTasks()
    })
}

function chooseProjectAndRenderItsTasks(){
    const chosenProject = document.querySelectorAll('.project-checkbox')
    chosenProject.forEach( project =>{
        project.addEventListener('click', (e)=>{
            let targetProjectID = e.target.id
            isChecked(targetProjectID)
            renderTasks(targetProjectID)
        })
    } )
}

function getTargetIdToRenderTasks(){
    const target = document.querySelector('.active-project').id
}

function addTask(){
    const addTaskBtn = document.querySelector('#addTask')
    addTaskBtn.addEventListener('click',()=>{
        createNewTask()
    })
}

function pushTaskIntoProjects(newTask){
    const taskProject = newTask.project
    const projectExists = projectList.find(project=>project.name=== taskProject)
    if(projectExists){
        projectExists.tasks.push(newTask)
        const projectName = projectExists.name
        renderTasks(projectName)
    }
    console.table(projectList)
}


export {
    createNewProject,
    createNewTask,
    addTask,
    addProjectAndRenderProjects,
    chooseProjectAndRenderItsTasks,
}

