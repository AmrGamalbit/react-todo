import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function App() {
  let [isChecked, setIsChecked] = useState(false)
  return (<>
      <h2 className="text-4xl font-bold text-heading flex items-center justify-center m-10">React ToDo</h2>
      <TodoForm/>
      <TodoItem text={'Play football'} isChecked={isChecked} onToggle={()=> setIsChecked(!isChecked)}/>
  </>)
}

export default App
