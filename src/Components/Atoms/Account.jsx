import { useAuth } from "../../Hooks/useAuth";
// import { useEffect, useState } from "react";

function LoadAccount(){
    const { user } = useAuth()
    
    return(
        <p className="bg-amber-200">
            {user?.email}
        </p>
    )

}

export{
    LoadAccount
}