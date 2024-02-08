import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function TasksSection() {
    const [data, setData] = useState()
    const [newData, setNewData] = useState(data)

    const fetchData = async ()=> {
        try {
            const response = await axios.get("http://localhost:3001/tasks")
            setData(response.data)
            console.log(response.data);
        } catch (error) {
            alert("Erro ao fazer requisicao GET", error)
        }
    }
    useEffect(async ()=>{
        fetchData()
    }, [])

    useEffect(()=>{
        setNewData(data)
    }, [data])

    return(
    <div>
        {newData.length > 0 ? (
            newData.map((element, index)=>{
                return(
                    <div key={index}>
                        <h2>{element.title}</h2>
                        <p>{element.task}</p>
                    </div>
                )
            })
        ) : <h1>Nao ha Tarefas</h1>}
    </div>
)
}

