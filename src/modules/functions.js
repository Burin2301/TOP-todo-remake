import { Project, createProject, projectList, saveProjectsInLocalAndRender, selectedProject } from "./projects"
import { renderTasks, renderAside } from "../UI/body"
import { createTask, saveTasksInLocalandRender, taskList } from "./tasks"

function createNewProject(){
    const projectInput = document.getElementById('inputNewProject')
    const newProjectName = projectInput.value
    if(newProjectName==="")return
    if(projectList.some((project)=>project._name === newProjectName))return
    const newProject = createProject(newProjectName)
    projectList.push(newProject)
    projectInput.value = ''
}

function getIdSelected(){
    return document.querySelector('.active-project').id
}

function createNewTask(){
    const taskInput = document.getElementById('inputNewtask')
    const taskInputDate = document.getElementById('inputNewtaskDate')
    const date = taskInputDate.value
    const taskInputValue = taskInput
    const newTaskName = taskInput.value
    const projectSelected = getIdSelected()
    console.log(projectSelected)
    if(newTaskName === '')return
    if(taskList.find((task)=>task._name === newTaskName))return
    const newTask = createTask(newTaskName, date, projectSelected)
    taskList.push(newTask)
    pushTaskIntoProjects(newTask)
    taskInputValue.value = ""
    taskInputDate.value = ""
    saveProjectsInLocalAndRender()
    saveTasksInLocalandRender()
}

function isChecked(targetId){
    const taskListContainer = document.querySelector('.task-container')
    const targetProjectId = targetId.toString().slice(5)
    console.log(targetProjectId)
    const checkbox = document.getElementById(targetProjectId)
    console.log(checkbox)
    if(checkbox.checked){
        checkbox.classList.add('active-project')
        const targetProject = projectList.find((project)=>project._name === targetProjectId)
        console.log(targetProject)
        taskListContainer.classList.remove('inactive')
        renderTasks(targetProject)
    }
}

function addProjectAndRenderProjects(){
    const addProjectBtn = document.getElementById('addProject')
    addProjectBtn.addEventListener('click', ()=>{
        createNewProject()
        saveProjectsInLocalAndRender(projectList)
        chooseProjectAndRenderItsTasks()
    })
}

function chooseProjectAndRenderItsTasks(){
    const chosenProject = document.querySelectorAll('.project-checkbox')
    chosenProject.forEach( project =>{
        project.addEventListener('click', (e)=>{
            let targetProjectData = e.target.getAttribute('data-project')
            let targetProjectID = e.target.id
            isChecked(targetProjectData)
            renderTasks(targetProjectID)
        })
    } )
}

function addTask(){
    const addTaskBtn = document.querySelector('#addTask')
    addTaskBtn.addEventListener('click',()=>{
        createNewTask()
    })
}

function pushTaskIntoProjects(newTask){
    const taskProject = newTask._project
    const projectExists = projectList.find(project=>project._name=== taskProject)
    if(projectExists){
        projectExists._tasks.push(newTask)
        const projectName = projectExists._name
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

