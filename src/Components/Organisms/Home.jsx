import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogSign } from "../Molecules/LogSign";
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
                <LogSign/>
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