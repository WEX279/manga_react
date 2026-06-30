import { NavLink } from "react-router-dom"
import cuenta from "../../../Assets/cuenta.png"

function ProfileBtn(){
    
    return(
        <div className="flex justify-center">
        <NavLink to="/profile" className=" w-16 ">
            <img src={cuenta}/>
        </NavLink>
        </div>
    )
}

export{
    ProfileBtn
}