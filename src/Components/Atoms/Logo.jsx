import { NavLink } from "react-router-dom"

function Logo(){
    return(
        <section >
            <NavLink className="text-3xl font-bold text-primary hover:text-primaryAlt duration-300" to="/home">MangaSync</NavLink>
        </section> 
    )
}

export{
    Logo
}