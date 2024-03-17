import { RouterProvider } from "react-router-dom";
import router from "./routes/Router"
import TaskContextProvider from "./contexts/TaskContext";

export default function App() {
  return(
    <TaskContextProvider>
      <RouterProvider router={router}/>
    </TaskContextProvider>
  )
}