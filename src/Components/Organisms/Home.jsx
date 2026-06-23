import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogIn } from "../Atoms/LogSign/LogInBtn";
import { SignUp } from "../Atoms/LogSign/SignUpBtn";
import { SwitchTheme } from "../Molecules/ThemeSwitcher";
import { Outlet } from "react-router-dom";

function Home(){
    return(
        <div className='bg-black text-white'>
            <div className="flex justify-around items-center ">
                <Logo/>
                <Layout/>
                <Searcher />
                <SwitchTheme/>
                <div className="flex gap-1">
                    <LogIn/>
                    <SignUp/>
                </div>
            </div>
            <hr/>
            <main>
            <Outlet />
            </main>
        </div>
    )
}

export{
    Home
}