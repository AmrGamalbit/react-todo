import TodoItem from "./TodoItem"

function TodoList({todos, onToggle}){
    return <div className="flex flex-col gap-2 my-10">
        {todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} onToggle={() => onToggle(todo.id)}/>
        ))}
    </div>
}

export default TodoList