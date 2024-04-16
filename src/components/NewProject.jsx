import React, {useRef} from 'react'
import Input from './Input'
import Modal from './Modal'
const NewProject = ({addProject,cancelNewProject}) => {
    const title = useRef()
    const description = useRef()
    const date = useRef()
    const modal = useRef()

    const saveProject = ()=>{
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value
        if (enteredDate.trim()==='' || enteredDescription.trim()==='' || enteredTitle.trim()===''){
            modal.current.open()
            return
        }
        addProject({
            title: title.current.value,
            description: description.current.value,
            date : date.current.value
        })
    }
  return (
    <>
        <Modal ref={modal} buttonCaption='Okay'>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Incorrect input</h2>
            <p className='text-stone-500 mb-4'>Ooops... looks like you forgot to enter a value.</p>
            <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <div className='flex justify-end items-center gap-4 my-4'>
                <button className='lg-stone-700' onClick={cancelNewProject}>Cancel</button>
                <button className='bg-stone-800 px-6 py-3 rounded-md text-stone-50' onClick={saveProject}>Save</button>
            </div>
            <menu className='w-full'>
                <div className='w-full'>
                    <Input text={'TITLE'} type='text' ref={title}></Input>
                    <Input text={'DESCRIPTION'} type='text' textarea ref={description}></Input>
                    <Input text={'DUE DATE'} type='date' ref={date}></Input>
                </div>
            </menu>
        </div>
    </>
  )
}

export default NewProject