import { useNavigate } from "react-router-dom"

function LogIn(){
    
    const navigate = useNavigate()

    const login = ()=>{
        navigate('/login')
    }
    
    return(
        <div className="flex justify-center">
        <button onClick={login} className="rounded-2xl text-black bg-secondary hover:bg-[#4563E8] w-16 duration-300" type="submit" >Log in </button>
        </div>
    )
}

export{
    LogIn
}