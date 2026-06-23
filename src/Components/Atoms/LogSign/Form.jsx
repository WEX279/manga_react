import { useRef, useEffect } from "react"
import { SignUp } from "./SignUpBtn"
import { LogIn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"

function Form({
    LogSign
}) {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[]
)

if(LogSign==="SignUp"){
    return(
        <div className="signCard">
            <div className="signUp">
                <h1>SignUp</h1>
            </div>
            <div className="signForm">
                <input placeholder="Email" ref={inputRef}></input>
                <input placeholder="Password"/>
                <input placeholder="Confirm password"/>
                <br/>
                <SendBtn/>
            </div>
            <br/>
            <p>Or log in if you don`t have an account!</p>
            <LogIn/>
        </div>
    )} else if(LogSign==="LogIn"){
        return(<div className="signCard">
            <div className="signUp">
                <h1>Log in</h1>
            </div>
            <div className="signForm">
                <input placeholder="Email" ref={inputRef}></input>
                <input placeholder="Password"/>
                <br/>
                <SendBtn/>
            </div>
            <br/>
            <p>Or sign up if you don`t have an account!</p>
            <SignUp/>
        </div>)
    }}

export {
    Form
}