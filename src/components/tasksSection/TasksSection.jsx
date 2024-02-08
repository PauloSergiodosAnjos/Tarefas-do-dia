import axios from "axios"
import { useEffect } from "react"

export default function TasksSection({data, setData}) {
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3001/tasks")
                setData(response.data)
                console.log(response.data);
            } catch (error) {
                alert("Erro ao fazer requisicao GET", error)
            }
        }
        fetchData()
    }, [])

    return(
    <div>
        {data.length > 0 ? (
            data.map((element, index)=>{
                return(
                    <div key={index}>
                        <h2>{element.title}</h2>
                        <ul>
                            <li>{element.task}</li>
                        </ul>
                    </div>
                )
            })
        ) : <h1>Nao ha Tarefas</h1>}
    </div>
)
}

