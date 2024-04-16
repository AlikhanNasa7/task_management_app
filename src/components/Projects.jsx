import React from 'react'

const Projects = ({projects, toNewProject, clickedProject,selectedProjectId}) => {
  return (
    <aside className='w-1/3 px-8 py-16 h-70 top-10 bg-stone-900 rounded-r-xl text-stone-50'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
        <div>
            <button className='px-4 py-2 mb-8 text-xs md:text-base bg-stone-600 rounded-xl opacity-50 hover:opacity-90' onClick={toNewProject}>+ Add Project</button>
        </div>
        <ul>
            {projects && projects.map((project)=> {
              let cssClasses = 'bg-stone-800 my-1.5 px-2 py-1 w-full text-left rounded-md hover:text-stone-200 hover:bg-stone-700 hover:opacity-100 '
              if (project.id===selectedProjectId){
                cssClasses += 'bg-stone-700 text-stone-200'
              }else{
                cssClasses += 'text-stone-400'
              }
              return (
              <li key={project.id}><button className={cssClasses} onClick={()=>clickedProject(project.id)}>{project.title}</button></li>
              )
            })}
        </ul>
    </aside>
  )
}

export default Projects