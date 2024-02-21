import axios from "axios"
import { useContext, useEffect, useState } from "react"
import "./_tasksSections.scss" 
import DataContext from "../contexts/DataContext"

export default function TasksSection() {
    const {data, setData} = useContext(DataContext)
    const [toggleCheck, setToggleCheck] = useState(false)
    
    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const responseToGet = await axios.get(`http://localhost:3001/tasks`)
            setData(responseToGet.data)
        } catch (error) {
            alert("Erro ao fazer requisicao GET", error)
        }
    }

    const editTask = async (id, value)=> {
        const taskToUpdate = data.find(element => element.id === id)
        try {
            await axios.put(`http://localhost:3001/tasks/${id}`, {
                title: taskToUpdate.title,
                task: value
            })
            await fetchData()
        } catch (error) {
            console.log("erro ao fazer PUT", error);
        }
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
                            <li className={toggleCheck === true ? "toggleCheck" : ""}>{element.task}</li>
                            <div className="status">
                                <span onClick={()=>{
                                    setToggleCheck(!toggleCheck)
                                }}>Feito</span>
                                <span onClick={async()=> {
                                    const value = prompt("fodase")
                                    editTask(element.id, value)
                                    await fetchData()
                                }}>Editar</span>
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

