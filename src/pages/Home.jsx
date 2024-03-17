import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

export default function Home() {

    const {task} = useContext(TaskContext)

    return(
        <main>
            <h1>Home</h1>
            <div>
                <h2>Quantidade de tasks {task.length - 1}</h2>
            </div>
            <div>
                {task.map((task)=>{
                    return(
                        <div key={task.id}>
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}