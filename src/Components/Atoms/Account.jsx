import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LoadAccount(){
    const { User } = useContext(AuthContext)
    console.log({User})
        return(
        <div>
            <p>{User?.email}</p>
        </div>
    )}



export{
    LoadAccount
}