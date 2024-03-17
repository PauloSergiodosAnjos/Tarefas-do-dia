import { useContext, useState } from "react"
import Task from "../taskModel/Task"
import { TaskContext } from "../contexts/TaskContext"

export default function FormTask({TaskToUpdate}) {
    
    const defaultTask = {
        name: "",
        description: ""
    }

    const [task, setTask] = useState(TaskToUpdate ? TaskToUpdate : defaultTask)
    const {addTask} = useContext(TaskContext)

    const handleChange = (ev)=> {
        setTask(currentState => {
            return {
                ...currentState,
                [ev.target.name]: ev.target.value
            }
        })
    }

    const handleSubmit = (ev)=> {
        ev.preventDefault()
        try {
            if (TaskToUpdate) {
                alert("oi")
            } else {
                const taskToAdd = new Task(task)
                addTask(taskToAdd)
                alert("Item cadastrado!")
                setTask(defaultTask)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">task</label>
                <input type="text" id="name" name="name" onChange={handleChange} value={task.name}/>
                <label htmlFor="description">Descricao</label>
                <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange} value={task.description}></textarea>
                <button>Salvar</button>
            </div>
        </form>
    )
}