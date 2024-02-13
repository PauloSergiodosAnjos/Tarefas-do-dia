import axios from "axios"
import { useContext, useState } from "react"
import DataContext from "../contexts/DataContext"

export default function Form() {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    const {data, setData} = useContext(DataContext)

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3001/tasks")
            setData(response.data)
        } catch (error) {
            alert("Erro ao fazer requisicao GET", error)
        }
    }

    const postTask = async (titleParam, taskParam)=> {
        const newData = {
            title: titleParam,
            task: taskParam
        }
        try {
            await axios.post("http://localhost:3001/tasks", newData)
            setData([...data, newData])
            await fetchData()
            setTitle("")
            setTask("")
        } catch (error) {
            console.log("Erro ao fazer a requisicao POST", error);
        }
    }

    return(
    <div>
        <label htmlFor="task">Titulo</label>
        <input onChange={(ev)=> setTitle(ev.target.value)} value={title} type="text" id="title" />
        <label htmlFor="task">Tarefa</label>
        <input onChange={(ev)=> setTask(ev.target.value)} value={task} type="text" id="task" />
        <button onClick={()=> postTask(title, task)}>Salvar</button>
    </div>
    )
}