import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogInBtn } from "../Atoms/LogSign/LogInBtn";
import { SignUpBtn } from "../Atoms/LogSign/SignUpBtn";

function Navbar(){
    return(
        <div className="flex justify-around items-center pb-[1em] pt-[1em] sticky top-0 bg-slate-900 text-white border-b dark:border-white">
                <Logo/>
                <Layout/>
                <Searcher />
                <div className="flex gap-1 ">
                    <LogInBtn/>
                    <SignUpBtn/>
                </div>
        </div>
    )
}

export{
    Navbar
}

