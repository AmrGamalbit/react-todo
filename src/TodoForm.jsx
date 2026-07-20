function TodoForm(){
    return (<form className="flex w-1/2 mx-auto">
        <input type="text" placeholder="Add a task" className="bg-surface text-body p-2 outline-none flex-1 rounded-l-lg placeholder:text-muted" />
        <button className="bg-primary text-surface p-2 cursor-pointer rounded-r-lg">Add</button>
    </form>)
}
export default TodoForm