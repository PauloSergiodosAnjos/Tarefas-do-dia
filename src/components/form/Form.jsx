import axios from "axios"
import { useState } from "react"

export default function Form({addTask}) {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")

    const titleValue = (ev)=>{
        setTitle(ev.target.value)
    }
    const taskValue = (ev)=>{
        setTask(ev.target.value)
    }
    
    const postTask = async (titleParam, taskParam)=> {
        const postData = {
            title: titleParam,
            task: taskParam
        }
        try {
            const response = await axios.post("http://localhost:3001/tasks", postData)
            addTask(postData)
            setTitle("")
            setTask("")
        } catch (error) {
            console.log("Erro ao fazer a requisicao POST", error);
        }
    }

    return(
    <div>
        <label htmlFor="task">Titulo</label>
        <input onChange={titleValue} value={title} type="text" id="title" />
        <label htmlFor="task">Tarefa</label>
        <input onChange={taskValue} value={task} type="text" id="task" />
        <button onClick={()=> postTask(title, task)}>Salvar</button>
    </div>
    )
}