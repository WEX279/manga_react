import { NavLink  } from "react-router-dom"

function Layout() {
    return(
        <div>
            <nav className="text-Light light:text-Dark font-bold flex flex-col ">
                <NavLink className="hover:text-secondary duration-300 flex justify-center" to="/home">Home</NavLink>
                <NavLink className="hover:text-secondary duration-300 flex justify-center" to="/manga">Catalog</NavLink>
                <NavLink className="hover:text-secondary duration-300 flex justify-center" to="/about">About us</NavLink>
                </nav>
        </div>
    )
}

export {
    Layout
}