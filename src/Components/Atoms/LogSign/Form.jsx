import { SignUp } from "./SignUpBtn"
import { LogIn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"
import { Input } from "./Input"

function Form({
    LogSign
}) {


if(LogSign==="SignUp"){
    return(
        <div className="flex flex-col self-center justify-center gap-[1em]">
            <div className="flex justify-center">
                <h1  className="font-bold text-3xl">SignUp</h1>
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
        return(
        <div className="flex flex-col self-center justify-center gap-[1em]">
            <div className="flex justify-center">
                <h1 className="font-bold text-3xl">Log in</h1>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <Input Focus={"Here"} placeholder="Email"/>
                <Input placeholder="Password"/>
                <br/>
                <SendBtn/>
            </div>
            <p>Or sign up if you don`t have an account!</p>
            <SignUp />
        </div>
        )
    }}

export {
    Form
}