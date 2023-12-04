import { renderAside } from "../UI/body";

class Project {
  constructor( id, name) {
    (this._id = id), (this._name = name), (this._tasks = []);
  }
  // SETTER
  setId(id){
    this._id = id;
  }
  setName(name) {
    this._name = name;
  }
  setTask(newTask) {
    this._tasks.push(newTask);
  }
  // GETTER
  getProjectId() {
    return this._id
  }
  getProjectName() {
    return this._name;
  }
  getTasks() {
    return this._tasks;
  }
}

// I CREATE KEY FOR LOCAL STORAGE
const LOCAL_STORAGE_PROJECT_KEY = "projects.list";
let projectList =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

// PERSISTENCE

function saveProjectsInLocalAndRender() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectList));
  renderAside(projectList);
}

let selectedProject = localStorage.getItem;

function createProject(id, name) {
  const newProject = new Project(id, name);
  return newProject;
}

export {
  Project,
  projectList,
  createProject,
  saveProjectsInLocalAndRender,
  selectedProject,
};
