import { useState } from "react"
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { SignUpBtn } from "./SignUpBtn"
import { LogInBtn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"
import { Input } from "./Input"
import { Logo } from "../Logo"

function Form({ LogSign }) {
    const { login } = useAuth();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate()

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
			navigate("/about")		
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}}
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
            <LogInBtn />
        </div>
    )} else if(LogSign==="LogIn"){

        return(
            <div className="mx-auto flex justify-center max-w-md flex-col gap-1 p-6">
                <div className="flex flex-col self-center justify-center gap-[1em] ">
                    <div className="flex justify-center">
                        <Logo/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-bold text-3xl bg-slate-50 text-black dark:text-white">Log in</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-1">
                        
                        <Input
                            name="email"
                            type="email"
                            Focus={"Email"}
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })
                            }/>
                        <Input
                            name="password"
                            type="password"
                            Focus={"Password"}
                            onSubmit={handleSubmit}
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })
                            }/>
                        {error && <p className="text-red-600">{error}</p>}
                        <br/>
                        <SendBtn/>
                    </form>
                    <p className="text-black dark:text-white">Or sign up if you don`t have an account!</p>
                    <SignUpBtn />
                </div>
        </div>
        )
    }
}

export {
    Form
}