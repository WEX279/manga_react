import { useNavigate } from "react-router-dom"

function LogIn(){
    
    const navigate = useNavigate()

    const login = ()=>{
        navigate('/login')
    }
    
    return(
        <button onClick={login} className="rounded-2xl bg-gray-400" type="submit" >Log in </button>
    )
}

export{
    LogIn
}