import { useNavigate } from "react-router-dom"

function SignUp(){
    
    const navigate = useNavigate()

    const signup = ()=>{
        navigate('/signup')
    }

    return(
        <div className="flex justify-center" >
            <button onClick={signup} className="rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16 duration-300"  type="submit" >Sign up</button>
        </div>
    )
}

export{
    SignUp
}