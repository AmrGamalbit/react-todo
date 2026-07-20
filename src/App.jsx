import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  function handleToggle(id){
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  function handleAdd(title){
    const newTodo = {id: Date.now(), title, completed: false}
    setTodos([newTodo, ...todos])
  }
  return (<>
      <h2 className="text-4xl font-bold text-heading flex items-center justify-center m-10">React ToDo</h2>
      <TodoForm onAddTodo={handleAdd}/>
      <TodoList todos={todos} onToggle={handleToggle}/>
  </>)
}

export default App
