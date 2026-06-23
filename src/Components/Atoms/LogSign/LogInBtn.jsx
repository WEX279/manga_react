import { useNavigate } from "react-router-dom"

function LogIn(){
    
    const navigate = useNavigate()

    const login = ()=>{
        navigate('/login')
    }
    
    return(
        <button onClick={login} className="logSign" >Log in </button>
    )
}

export{
    LogIn
}