import { NavLink } from "react-router-dom"

function LogInBtn(){
    
    return(
        <div className="flex justify-center">
        <NavLink to="/login" className="flex justify-center font-bold rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16 duration-300 light:text-Light light:bg-Dark light:hover:bg-secondary">Log in </NavLink>
        </div>
    )
}

export{
    LogInBtn
}