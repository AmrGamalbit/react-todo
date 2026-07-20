import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{id:1, title: 'play football', completed: false}, {id:2, title: 'eat dinner', completed: false}])
  function handleToggle(id){
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  return (<>
      <h2 className="text-4xl font-bold text-heading flex items-center justify-center m-10">React ToDo</h2>
      <TodoForm/>
      <TodoList todos={todos} onToggle={handleToggle}/>
  </>)
}

export default App
