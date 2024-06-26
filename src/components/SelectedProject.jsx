import React from 'react'
import Tasks from './Tasks'
const SelectedProject = ({project,tasks,deleteProject,addTask,deleteTask}) => {
    const formattedDate = new Date(project.date).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                <button className='text-stone-600 hover:text-stone-950' onClick={()=>deleteProject(project.id)}>Delete</button>
            </div>
            {formattedDate}
            <p className='my-4'>{project.description}</p>
        </header>
        <hr />
        <Tasks tasks={tasks} addTask={addTask} deleteTask={deleteTask} projectId={project.id}/>
    </div>
  )
}

export default SelectedProject