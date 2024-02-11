import { useState } from "react";
import Form from "./components/form/Form";
import TasksSection from "./components/tasksSection/TasksSection";
import OptionsContext from "./components/contexts/OptionsContext";
import TasksConcluidsContext from "./components/contexts/TasksConcluidsContext";

export default function App() {
  const [data, setData] = useState([])
  const [concluidTask, setConcluidTask] = useState([])

  return(
    <OptionsContext.Provider value={{data, setData}}>
      <TasksConcluidsContext.Provider value={{concluidTask, setConcluidTask}}>
      <h1>Lista de Tarefas</h1>
      <Form />
      <TasksSection />
      </TasksConcluidsContext.Provider>
    </OptionsContext.Provider>
  )
}

