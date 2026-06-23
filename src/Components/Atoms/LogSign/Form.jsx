import { SignUp } from "./SignUpBtn"
import { LogIn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"
import { Input } from "./Input"

function Form({
    LogSign
}) {


if(LogSign==="SignUp"){
    return(
        <div className="flex flex-col rounded border justify-self-center gap-1 w-3xl h-xl">
            <div className="flex justify-center">
                <h1>SignUp</h1>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <Input Focus={"Here"}placeholder="Email" />
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <br/>
                <SendBtn/>
            </div>
            <br/>
            <p>Or log in if you don`t have an account!</p>
            <LogIn />
        </div>
    )} else if(LogSign==="LogIn"){
        return(<div className="signCard" className="flex flex-col border justify-self-center gap-1 max-w-28rem">
            <div className="flex justify-center">
                <h1>Log in</h1>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <Input Focus={"Here"}placeholder="Email"/>
                <Input placeholder="Password"/>
                <br/>
                <SendBtn/>
            </div>
            <br/>
            <p>Or sign up if you don`t have an account!</p>
            <SignUp />
        </div>)
    }}

export {
    Form
}