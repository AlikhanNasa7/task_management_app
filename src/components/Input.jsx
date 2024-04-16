import React, {forwardRef} from 'react'
const Input = forwardRef(({text, textarea, ...props}, ref) => {
    const inputClasses = 'bg-stone-200 w-full p-1 border-b-2 rounded-sm border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600'
    const input = textarea ? (<textarea ref={ref} {...props} className={inputClasses}></textarea>) : (<input ref={ref} {...props} className={inputClasses}></input>)
  return (
    <div className='flex flex-col mb-4'>
        <label className='text-sm font-bold uppercase text-stone-500'>{text}</label>
        {input}
    </div>
  )
})

export default Input