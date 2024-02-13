import axios from "axios"
import { useContext, useEffect } from "react"
import "./_tasksSections.scss" 
import DataContext from "../contexts/DataContext"

export default function TasksSection() {
    const {data, setData} = useContext(DataContext)
    
    useEffect(()=>{
        fetchData()
        console.log(data);
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

    const deleteTask = async (id)=> {
        try {
            await axios.delete(`http://localhost:3001/tasks/${id}`)
            setData(data.filter(task => task.id !== id))
        } catch (error) {
            console.log("Erro ao excluir task", error);
        }
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
                                <span onClick={async()=> {
                                    deleteTask(element.id)
                                    await fetchData()
                                }}>Excluir</span>
                            </div>
                        </ul>
                    </div>
                )
            })
        ) : <h1>Nao ha Tarefas</h1>}
    </div>
)
}

