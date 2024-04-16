import React from 'react'

const NoProjectSelected = ({toNewProject}) => {
  return (
    <div className='mt-24 text-center w-2/3 '>
        <img src="src/assets/no-projects.png" alt="Free content image" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button className='bg-stone-800 px-6 py-3 rounded-md text-stone-50 mt-8' onClick={toNewProject}>Create new project</button>
    </div>
  )
}

export default NoProjectSelected