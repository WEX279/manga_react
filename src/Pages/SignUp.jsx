import { useNavigate } from "react-router-dom"
import { useRef, useEffect,  } from "react";
import { Input } from "../Components/Atoms/Input";

function Signup() {
    const navigate = useNavigate()
    const log = ()=>{
        navigate('/login')
    }
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()

    },[])

    return(
        <div className="signCard">
            <div className="signUp">
                <h1>Sign Up</h1>
            </div>
            <div className="signForm">
                <Input placeholder="Email" ref={inputRef}/>
                <Input placeholder="Password"/>
                <Input placeholder="The same password"/>
                <br/>
                <button>Send</button>
            </div>
            <br/>
            <p>Or log in if you already have an account!</p>
            <button onClick={log}>Log in</button>
        </div>
    )
}

export {
    Signup
}