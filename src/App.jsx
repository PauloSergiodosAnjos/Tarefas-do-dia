import { useState } from "react";
import Form from "./components/form/Form";
import TasksSection from "./components/tasksSection/TasksSection";

export default function App() {
  const [data, setData] = useState([]);

  const addTask = (newTask) => {
    setData([...data, newTask])
  }

  return(
    <>
    <h1>Lista de Tarefas</h1>
    <Form addTask={addTask}/>
    <TasksSection data={data} setData={setData}/>
    </>
  )
}

