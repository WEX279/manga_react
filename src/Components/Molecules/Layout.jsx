import { NavLink,  } from "react-router-dom"

function Layout() {
    return(
        <div>
            <nav className="text-white ">
                <NavLink className="hover:text-secondary duration-300" to="/">Inicio</NavLink> | <NavLink className="hover:text-secondary duration-300" to="/manga">Catalog</NavLink> | <NavLink className="hover:text-secondary duration-300" to="/about">About us</NavLink> 
            </nav>
        </div>
    )
}

export {
    Layout
}