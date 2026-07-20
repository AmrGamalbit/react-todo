import { Check } from "lucide-react"

function TodoItem ({title, completed, onToggle}) {
    let checkboxBg = completed ? 'bg-primary' : 'bg-surface'
    return (<div className='flex justify-between bg-surface items-center w-1/2 rounded-lg py-1 px-2 mx-auto'>
        <p className="text-body">{title}</p>
        <div className={`w-5 h-5 border-2 border-border rounded cursor-pointer flex justify-center items-center ${checkboxBg}`} onClick={onToggle}>
            {completed && <Check color="#fcfaf4" size={12} strokeWidth={3} />}
        </div>
    </div>)
}
export default TodoItem