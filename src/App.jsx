import Projects from "./components/Projects";
import SelectedProject from "./components/SelectedProject";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const[projects, setProjects] = useState({
    currentAction: null,
    selectedProjectId: undefined,
    list: [],
    tasks: []
  })
  const addProject = (projectData) =>{
    setProjects(prev=>{
      
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prev,
        currentAction: 'project',
        selectedProjectId: newProject.id,
        list: [...projects.list, newProject]
      }
    })
  }
  const cancelNewProject = ()=>{
    setProjects((prev)=>{
      return {
        ...prev, 
        selectedProjectId: undefined,
        currentAction: null
      }
    })
  }
  const toNewProject = ()=>{
    setProjects((prev)=>{
      return {...prev,
      currentAction:'newProject' }
    })
  }

  const clickedProject = (id) =>{
    setProjects(prev=>{
      return {
        ...prev,
        selectedProjectId: id,
        currentAction:'project'
      }
    })
  }
  const deleteProjectHandler = (id)=>{
    setProjects(prev=>{
      return {
        ...prev,
        list: projects.list.filter(project=>project.id!==id),
        tasks : projects.tasks.filter(task=>task.projectId!=id),
        selectedProjectId: undefined,
        currentAction:null
      }
    })
  }
  const addTaskHandler = (task, projectId)=>{
    setProjects(prev=>{
      return {
        ...prev,
        tasks: [...prev.tasks,{...task, projectId:projectId}]
      }
    })
  }
  const deleteTaskHandler = (taskId, projectId)=>{
    setProjects(prev=>{
      return {
        ...prev, 
        tasks: projects.tasks.filter(task=>task.id!==taskId)
      }
    })
  }
  let selectedProject =''
  let selectedTasks = ''
  if (projects.currentAction==='project'){
    selectedProject = projects.list.find(project=>projects.selectedProjectId===project.id)
    selectedTasks = projects.tasks.filter(task=>task.projectId===projects.selectedProjectId)
  }
  return (
    <main className="flex gap-8 h-screen mt-8">
      <Projects projects={projects.list} toNewProject={toNewProject} clickedProject={clickedProject} selectedProjectId={projects.selectedProjectId}/>
      {projects.currentAction===null && <NoProjectSelected toNewProject={toNewProject}/>}
      {projects.currentAction==='newProject' && <NewProject addProject={addProject} cancelNewProject={cancelNewProject}/>}
      {projects.currentAction==='project' && <SelectedProject project={selectedProject} tasks={selectedTasks} deleteProject={deleteProjectHandler} addTask={addTaskHandler} deleteTask={deleteTaskHandler}/>}
    </main>
  );
}

export default App;
