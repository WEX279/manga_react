import { SignUp } from "./SignUpBtn"
import { LogIn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"
import { Input } from "./Input"
import { Logo } from "../Logo"

function Form({
    LogSign
}) {


if(LogSign==="SignUp"){
    return(
        <div className="flex flex-col self-center justify-center gap-[1em]">
            <div className="flex justify-center">
                <div className="flex justify-center">
                    <Logo/>
                </div>
                <h1  className="font-bold text-3xl bg-slate-50 text-black dark:text-white">SignUp</h1>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <Input Focus={"Email"}/>
                <Input Focus={"Password"}/>
                <Input Focus={"Confirm password"}/>
                <br/>
                <SendBtn/>
            </div>
            <p className="bg-slate-50 text-black dark:text-white">Or log in if you don`t have an account!</p>
            <LogIn />
        </div>
    )} else if(LogSign==="LogIn"){
        return(
        <div className="flex flex-col self-center justify-center gap-[1em] ">
            <div className="flex justify-center">
                <Logo/>
            </div>
            <div className="flex justify-center">
                <h1 className="font-bold text-3xl bg-slate-50 text-black dark:text-white">Log in</h1>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <Input Focus={"Email"} />
                <Input Focus={"Password"}/>
                <br/>
                <SendBtn/>
            </div>
            <p className="text-black dark:text-white">Or sign up if you don`t have an account!</p>
            <SignUp />
        </div>
        )
    }}

export {
    Form
}