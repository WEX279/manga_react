import { useNavigate } from "react-router-dom"

function SignUp(){
    
    const navigate = useNavigate()

    const signup = ()=>{
        navigate('/signup')
    }

    return(
            <button onClick={signup} className="rounded-2xl  bg-gray-400 hover:bg-gray-500" type="submit" > Sign up</button>
    )
}

export{
    SignUp
}