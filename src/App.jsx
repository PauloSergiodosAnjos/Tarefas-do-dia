import { useState } from "react";
import Form from "./components/form/Form";
import TasksSection from "./components/tasksSection/TasksSection";
import DataContext from "./components/contexts/DataContext";

export default function App() {
  const [data, setData] = useState([]);

  return(
    <>
    <h1>Lista de Tarefas</h1>
    <DataContext.Provider value={{data, setData}}>
      <Form />
      <TasksSection />
    </DataContext.Provider>
    </>
  )
}

