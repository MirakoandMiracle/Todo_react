import React, { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoProvider'

const Changetheme  = () => {
  const {setChangedDark,changedDark} = useContext(ToDoContext);
  const toggleTheme = () => {
    setChangedDark(!changedDark);
  };
  return(
     <>
       <>
      <div
        className={`${
          changedDark ? 'bg-red-400' : 'bg-black'
        } text-white rounded ml-3 text-[11px] md:text-[14px] py-1 px-2 md:py-2 md:px-3`}
        onClick={toggleTheme}
      >
        {changedDark ? 'Default' : 'Dark'}
      </div>
    </></>

  )
   
}

export default Changetheme
