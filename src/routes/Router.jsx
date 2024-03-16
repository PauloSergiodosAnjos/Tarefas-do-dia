import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import CreateTask from "../pages/tasks/CreateTask";
import ShowTask from "../pages/tasks/ShowTask";
import UpdateTask from "../pages/tasks/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "addTask",
                element: <CreateTask/>
            },
            {
                path: ":id",
                element: <ShowTask/>
            },
            {
                path: ":id/update",
                element: <UpdateTask/>
            }
        ]
    }
])

export default router