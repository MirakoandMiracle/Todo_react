import React, { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoProvider'

const ToDoFilter = () => {
    const {setIsCompletedFilter} = useContext(ToDoContext)
  return (
    <div className='flex justify-end mt-5'>
        <div className=' rounded flex items-center'>
            <input type="checkbox" name='chkfilter' id='chkfilter'  className="w-3 md:w-5" onChange ={
                (e)=>{
                    setIsCompletedFilter(e.target.checked)
                }
            }/>
            <label className="text-red-400 ml-2 cursor-pointer font-medium text-[12px] md:text-[15px]" htmlFor='chkfilter'> Completed</label>
        </div>
    </div>
  )
}

export default ToDoFilter