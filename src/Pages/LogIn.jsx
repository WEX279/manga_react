import { useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"

function Login() {
    const navigate = useNavigate()
    const sign= ()=>{
        navigate('/signup')
    }
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })
    return(
        <div className="signCard">
            <div className="signUp">
                <h1>Log in</h1>
            </div>
            <div className="signForm">
                <input placeholder="Email" ref={inputRef}></input>
                <input placeholder="Password"></input>
                <br/>
                <button>Send</button>
            </div>
            <br/>
            <p>Or sign up if you don`t have an account!</p>
            <button onClick={sign} >Sign up</button>

        </div>
    )
}

export {
    Login
}