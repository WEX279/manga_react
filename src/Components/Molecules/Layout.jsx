import { NavLink } from "react-router-dom"

function Layout() {
    return(
        <nav>
            <NavLink to="/">Inicio</NavLink> | <NavLink to="/manga">Catalog</NavLink> | <NavLink to="/About">About us</NavLink> 
        </nav>
    )
}

export {
    Layout
}