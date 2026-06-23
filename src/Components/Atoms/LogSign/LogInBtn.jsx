import { useNavigate } from "react-router-dom"

function LogIn(){
    
    const navigate = useNavigate()

    const login = ()=>{
        navigate('/login')
    }
    
    return(
        <div className="flex justify-center">
        <button onClick={login} className="rounded-2xl bg-gray-400 hover:bg-gray-500 w-16" type="submit" >Log in </button>
        </div>
    )
}

export{
    LogIn
}