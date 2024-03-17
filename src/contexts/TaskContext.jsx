import { createContext, useState } from "react";

export const TaskContext = createContext()

export default function TaskContextProvider({children}) {
    const [task, setTask] = useState(()=>{
        const storedTask = localStorage.getItem("tasks")
        if (!storedTask) {
            return []
        }
        
        return [storedTask]
    })

    const addTask = (item)=> {
        setTask(currentState => {
            const updateTasks = [item, ...currentState]
            localStorage.setItem("tasks", updateTasks)
            return updateTasks
        })
    }

    const tasks = {
        task,
        addTask
    }

    return(
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    )
}