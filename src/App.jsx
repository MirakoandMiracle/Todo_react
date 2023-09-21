


import './App.css'
import ToDoFilter from './components/ToDoFilter'
import ToDoForm from './components/ToDoForm/Index'
import ToDoList from './components/ToDoList'

import ToDoProvider from './context/ToDoProvider'

function App() {
  

  return (
    <ToDoProvider>
      <div className="h-screen bg-[url('https://images.unsplash.com/photo-1555231964-2efe395ef6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGluayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] w-full md:w-[60%] mx-auto bg-cover rounded ">
    <div className='bg-red-100 bg-opacity-70 p-2 md:px-5 md:py-4 h-screen'>
      <ToDoForm/>
    <ToDoFilter/>
    <ToDoList/>
  </div>
  </div>
</ToDoProvider>
    
  )
}

export default App
