import axios from "axios"
import { useEffect } from "react"
import "./_tasksSections.scss" 

export default function TasksSection({data, setData}) {
    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3001/tasks")
            setData(response.data)
        } catch (error) {
            alert("Erro ao fazer requisicao GET", error)
        }
    }

    const editTask = ()=> {
        
    }

    const deleteTask = async(id)=> {
        const response = await axios.delete(`http://localhost:3001/tasks/${id}`)
    }

    return(
    <div>
        {data.length > 0 ? (
            data.map((element, index)=>{
                return(
                    <div key={index}>
                        <h2>{element.title}</h2>
                        <ul>
                            <li>{element.task}</li>
                            <div className="status">
                                <span>Feito</span>
                                <span>Editar</span>
                                <span onClick={()=> deleteTask(element.id)}>Excluir</span>
                            </div>
                        </ul>
                    </div>
                )
            })
        ) : <h1>Nao ha Tarefas</h1>}
    </div>
)
}

