import React,{useRef} from 'react'
import Modal from './Modal'
const Tasks = ({tasks,addTask,deleteTask,projectId}) => {
    const modal = useRef()
    const inputRef = useRef()
    const handleButtonClick = ()=>{
        const text = inputRef.current.value
        if (text.trim()===''){
            modal.current.open()
            return
        }
        const task = {
            text: text,
            id: Math.random()
        }
        addTask(task,projectId)
        inputRef.current.value = ''
    }
  return (
    <div>
        <Modal ref={modal} buttonCaption='Okay'>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Incorrect input</h2>
            <p className='text-stone-500 mb-4'>Your task should not be an empty input.</p>
        </Modal>
        <h2 className='text-2xl mb-4'>Tasks</h2>
        <input type="text" className='mr-4 h-8 w-60 p-2 bg-stone-200' ref={inputRef}/>
        <button onClick={handleButtonClick}>Add Task</button>
        {tasks.length===0 && <p className='mt-2'>This project does not have any tasks yet.</p>}
        {tasks.length>0 && 
        <ul>
            {tasks.map(task=><li key={task.id}>
                <div className='flex justify-between items-center h-20 w-full bg-stone-100 p-4 rounded-md mt-4'>
                    <p>{task.text}</p>
                    <button onClick={()=>deleteTask(task.id, projectId)}>Clear</button>
                </div>
                </li>)}
        </ul>}
    </div>
  )
}

export default Tasks