import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
        <>
        <header>
            <Link to="/"><h3>Inicio</h3></Link>
            <Link to="/addTask"><h3>Criar Task</h3></Link>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>Feito por Paulo Sergio</footer>
        </>
    )
}