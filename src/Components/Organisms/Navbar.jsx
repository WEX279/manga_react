import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogInBtn } from "../Atoms/LogSign/LogInBtn";
import { SignUpBtn } from "../Atoms/LogSign/SignUpBtn";
import { SwitchTheme } from "../Molecules/ThemeSwitcher";
import { Outlet } from "react-router-dom";

function Navbar(){
    return(
        <div className='bg-black text-white'>
            <div className="flex justify-around items-center pb-[1em] pt-[1em]">
                <Logo/>
                <Layout/>
                <Searcher />
                <SwitchTheme/>
                <div className="flex gap-1 bg-black">
                    <LogInBtn/>
                    <SignUpBtn/>
                </div>
            </div>
            <hr/>
                <main >
                <Outlet />
                </main>
        </div>
    )
}

export{
    Navbar
}