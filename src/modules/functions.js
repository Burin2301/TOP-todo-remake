import {
  createProject,
  projectList,
  // projectSelected,
  saveProjectsInLocalAndRender,
} from "./projects";
import { renderTasks } from "../UI/body";
import { createTask, saveTasksInLocalandRender, taskList } from "./tasks";

function createNewProject() {
  const projectInput = document.getElementById("inputNewProject");
  const newProjectName = projectInput.value;
  const newProjectId = newProjectName.replace(/\s+/g, '')
  console.log(newProjectId)
  if (newProjectName === "" || newProjectId === "") return;
  if (projectList.some((project) => project._id === newProjectId)) return;
  const newProject = createProject(newProjectId, newProjectName);
  projectList.push(newProject);
  projectInput.value = "";
}

function createNewTask() {
  const taskInput = document.getElementById("inputNewtask");
  const taskInputDate = document.getElementById("inputNewtaskDate");
  const date = taskInputDate.value;
  const taskInputValue = taskInput;
  const newTaskName = taskInput.value;
  if (newTaskName === "") return;
  if (taskList.find((task) => task._name === newTaskName)) return;
  const newTask = createTask(newTaskName, date, projectSelectedToRender);
  taskList.push(newTask);
  pushTaskIntoProjects(newTask);
  taskInputValue.value = "";
  taskInputDate.value = "";
  saveProjectsInLocalAndRender();
  saveTasksInLocalandRender();
}


function addProjectAndRenderProjects() {
  const addProjectBtn = document.getElementById("addProject");
  addProjectBtn.addEventListener("click", () => {
    createNewProject();
    saveProjectsInLocalAndRender(projectList);
  });
}

const LOCAL_STORAGE_SELECTED_PROJECT = "project.selected"
let projectSelectedToRender = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT))

function saveProjectSelected(){
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT, JSON.stringify(projectSelectedToRender))
}

function markProjectAsChecked(projectSelectedToRender){
  const projectCheckboxes = document.querySelectorAll('.project-list')
  projectCheckboxes.forEach((project) => {
    project.classList.remove('project-active')
    if(project.id === projectSelectedToRender){
      project.classList.add('project-active')
      renderTasks(projectSelectedToRender);
      addTask();
      const taskContainerTitle = document.querySelector('.task-title')
      const taskTitle = projectList.find((project)=>project._id===projectSelectedToRender  )
      taskContainerTitle.innerText = taskTitle._name
    }
  });
}

function showTaskContainer(){
  const taskContainer = document.querySelector('.task-container')
  taskContainer.classList.remove('inactive')
}

function chooseProjectAndRenderItsTasks() {
  document.addEventListener('click', e => {
    if(e.target.className === "project-list" ){
      projectSelectedToRender = e.target.id
      saveProjectSelected()
      showTaskContainer()
      markProjectAsChecked(projectSelectedToRender)
    }
  })
}

function addTask() {
  const addTaskBtn = document.querySelector("#addTask");
  addTaskBtn.addEventListener("click", () => {
    createNewTask();
  });
}

function pushTaskIntoProjects(newTask) {
  const taskProject = newTask._project;
  const projectExists = projectList.find(
    (project) => project._id === taskProject,
  );
  if (projectExists) {
    projectExists._tasks.push(newTask);
    const projectId = projectExists._id;
    renderTasks(projectId);
  }
  console.table(projectList);
}

export {
  createNewProject,
  createNewTask,
  addTask,
  addProjectAndRenderProjects,
  chooseProjectAndRenderItsTasks,
  projectSelectedToRender,
};
