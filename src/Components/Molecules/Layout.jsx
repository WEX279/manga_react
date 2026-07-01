import { NavLink  } from "react-router-dom"

function Layout() {
    return(
        <div>
            <nav className="text-Light light:text-Dark font-bold ">
                <NavLink className="hover:text-secondary duration-300 " to="/home">Home</NavLink> | <NavLink className="hover:text-secondary duration-300 " to="/manga">Catalog</NavLink> | <NavLink className="hover:text-secondary duration-300 " to="/about">About us</NavLink>
            </nav>
        </div>
    )
}

export {
    Layout
}