import { NavLink } from "react-router-dom"

function Logo(){
    return(
        <section className="">
            <NavLink className="w-2 text-3xl font-bold text-primary hover:text-primaryAlt duration-300" to="/">MangaSync</NavLink>
        </section> 
    )
}

export{
    Logo
}