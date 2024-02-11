import { useContext, useEffect, useState } from "react"
import "./_tasksSections.scss" 
import OptionsContext from "../contexts/OptionsContext"
import TasksConcluidsContext from "../contexts/TasksConcluidsContext"

export default function TasksSection() {

    const {data, setData} = useContext(OptionsContext)
    const {concluidTask, setConcluidTask}= useContext(TasksConcluidsContext)
    const [check, setCheck] = useState(Array(data.length).fill(false))

    const deleteTask = (id)=> {
        setData(data.filter(task => task.id !== id))
    }

    const editTask = (id) => {
        const editedValue = prompt("fodase")
        const newData = data.map((task)=>{
            if (task.id === id) {
                return {...task, task: editedValue}
            }
            return task
        })
        console.log(newData);
        setData(newData)
    }

    const checkTask = (index, id)=> {
        const newCheck = [...check]
        newCheck[index] = !newCheck[index]
        setCheck(newCheck)
        const task = data.find(task => task.id === id)
        if (newCheck[index]) {
            setConcluidTask([...concluidTask, task.task])
        } else {
            setConcluidTask(concluidTask.filter(concluid => concluid !== task.task))
        }
    }
    
    return(
    <div>
        <h1>Tarefas Concluidas</h1>
        {concluidTask.length > 0 ? (
        <h3>{concluidTask.length}</h3>
        ) : <h2>Nao tem</h2>}

        {data.length > 0 ? (
            data.map((element, index)=>{
                return(
                    <div key={index}>
                        <ul>
                            <li className={`check-${check[index] ? "active" : ""}`}>{element.task}</li>
                            <div className="status">
                                <span onClick={()=> checkTask(index, element.id)}>Feito</span>
                                <span onClick={()=> editTask(element.id)}>Editar</span>
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

