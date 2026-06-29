import { useState } from "react"
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { SignUpBtn } from "./SignUpBtn"
import { LogInBtn } from "./LogInBtn"
import { SendBtn } from "../SendBtn"
import { Input } from "./Input"
import { Logo } from "../Logo"
import { Loading } from "../Loading";

function Form({ LogSign }) {
    const { register, login } = useAuth();
	const [ data, setData ] = useState({ email: "", password: "", confirmPassword:"" });
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate()

	
        if(LogSign==="SignUp"){

    async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await register(data.email, data.password, data.confirmPassword);
			navigate("/profile")		
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}}

    if(isLoading){
        return(
            <Loading/>
        )
    }

    return(
        <div className="mx-auto flex justify-center max-w-md flex-col gap-1 p-6">
                <div className="flex flex-col self-center justify-center gap-[1em] ">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-bold text-3xl bg-Dark text-Light light:text-Dark light:bg-inherit">Sign Up</h1>
                    </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-1">
                <Input
                    Focus={"Email"}
                    value={data.email}
                    name="email"
                    type="email"
                    onChange={(e) => setData({ ...data, email: e.target.value })}/>
                <Input
                    Focus={"Password"}
                    value={data.password}
                    name="password"
                    type="password"
                    onSubmit={handleSubmit}
                    onChange={(e) => setData({ ...data, password: e.target.value })}/>
                <Input
                    Focus={"Confirm password"}
                    value={data.confirmPassword}
                    name="confirmPassword"
                    type="password"
                    onSubmit={handleSubmit}
                    onChange={(e) => setData({ ...data,confirmPassword: e.target.value })}/>
                    {error && <p className="text-red-600">{error}</p>}
                <SendBtn/>
            </form>
            <p className=" text-Light light:text-Dark dark:bg-inherit">Or log in if you don`t have an account!</p>
            <LogInBtn />
        </div>
        </div>
    )} else if(LogSign==="LogIn"){

        async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
			navigate("/home")		
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}}

        return(
            <div className="mx-auto flex justify-center max-w-md flex-col gap-1 p-6">
                <div className="flex flex-col self-center justify-center gap-[1em] ">
                    <div className="flex justify-center">
                        <Logo/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-bold text-3xl bg-Dark text-Light light:text-Dark light:bg-Light">Log in</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-1">
                        
                        <Input
                            Focus={"Email"}
                            value={data.email}
                            name="email"
                            type="email"
                            onChange={(e) => setData({ ...data, email: e.target.value })
                            }/>
                        <Input
                            Focus={"Password"}
                            value={data.password}
                            name="password"
                            type="password"
                            onSubmit={handleSubmit}
                            onChange={(e) => setData({ ...data, password: e.target.value })
                            }/>
                        {error && <p className="text-red-600">{error}</p>}
                        <SendBtn/>
                    </form>
                    <p className="text-Light light:text-Dark">Or sign up if you don`t have an account!</p>
                    <SignUpBtn />
                </div>
        </div>
        )
    }
}

export {
    Form
}