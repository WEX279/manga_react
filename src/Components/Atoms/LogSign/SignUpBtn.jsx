import { useNavigate } from "react-router-dom"

function SignUp(){
    
    const navigate = useNavigate()

    const signup = ()=>{
        navigate('/signup')
    }

    return(
            <button onClick={signup} className="logSign"> Sign up</button>
    )
}

export{
    SignUp
}