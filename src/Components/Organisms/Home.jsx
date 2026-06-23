import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogIn } from "../Atoms/LogSign/LogInBtn";
import { SignUp } from "../Atoms/LogSign/SignUpBtn";
import { SwitchTheme } from "../Molecules/ThemeSwitcher";
import { Outlet } from "react-router-dom";

function Home(){
    return(
        <div>
            <div className="navBar">
                <Logo/>
                <Layout/>
                <Searcher/>
                <SwitchTheme/>
                <div className="logsign">
                    <LogIn/>
                    <SignUp/>
                </div>
            </div>
            <hr/>
                <main className='catalog'>
                    <Outlet />
                </main>
        </div>
    )
}

export{
    Home
}