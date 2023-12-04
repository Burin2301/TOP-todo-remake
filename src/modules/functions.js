import {
  createProject,
  projectList,
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

function createNewTask(projectID) {
  const taskInput = document.getElementById("inputNewtask");
  const taskInputDate = document.getElementById("inputNewtaskDate");
  const date = taskInputDate.value;
  const taskInputValue = taskInput;
  const newTaskName = taskInput.value;
  if (newTaskName === "") return;
  if (taskList.find((task) => task._name === newTaskName)) return;
  const newTask = createTask(newTaskName, date, projectID);
  taskList.push(newTask);
  pushTaskIntoProjects(newTask);
  taskInputValue.value = "";
  taskInputDate.value = "";
  saveProjectsInLocalAndRender();
  saveTasksInLocalandRender();
  isChecked(projectID)
  addProjectAndRenderProjects()
}

function isChecked(targetId) {
  const taskListContainer = document.querySelector(".task-container");
  const checkbox = document.getElementById(targetId);
  console.log(checkbox)
  if (checkbox.checked) {
    checkbox.classList.add("active-project");
    const targetProject = projectList.find(
      (project) => project._id === targetId,
    );
    taskListContainer.classList.remove("inactive");
    renderTasks(targetProject);
  }
}

function addProjectAndRenderProjects() {
  const addProjectBtn = document.getElementById("addProject");
  addProjectBtn.addEventListener("click", () => {
    createNewProject();
    saveProjectsInLocalAndRender(projectList);
    chooseProjectAndRenderItsTasks();
  });
}

function chooseProjectAndRenderItsTasks() {
  const chosenProject = document.querySelectorAll(".project-checkbox");
  chosenProject.forEach((project) => {
    project.addEventListener("click", (e) => {
      let targetProjectID = e.target.id;
      isChecked(targetProjectID);
      renderTasks(targetProjectID);
      addTask(targetProjectID)
    });
  });
}

function addTask(projectID) {
  const addTaskBtn = document.querySelector("#addTask");
  addTaskBtn.addEventListener("click", () => {
    createNewTask(projectID);
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
  isChecked,
};
