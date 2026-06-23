import { NavLink,  } from "react-router-dom"

function Layout() {
    return(
        <div>
        <nav>
            <NavLink to="/">Inicio</NavLink> | <NavLink to="/manga">Catalog</NavLink> | <NavLink to="/About">About us</NavLink> 
        </nav>

        
        </div>
    )
}

export {
    Layout
}