import { useContext, useState } from "react"
import OptionsContext from "../contexts/OptionsContext"

export default function Form() {
    const [task, setTask] = useState("")
    const {data, setData} = useContext(OptionsContext)
    
    const taskValue = (ev)=>{
        setTask(ev.target.value)
    }

    const generateRandomId = () => {
        return Math.random().toString(36).substr(2, 9);
    };
    
    const postTask = (taskParam)=> {
            const postData = {
                id: generateRandomId(),
                task: taskParam
            }
            setData([...data, postData])
            setTask("")
    }

    return(
    <div>
        <label htmlFor="task">Tarefa</label>
        <input onChange={taskValue} value={task} type="text" id="task" />
        <button onClick={()=> {postTask(task)}}>Salvar</button>
    </div>
    )
}