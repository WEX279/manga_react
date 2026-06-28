import { Searcher } from "../Molecules/Searcher";
import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { LogInBtn } from "../Atoms/LogSign/LogInBtn";
import { SignUpBtn } from "../Atoms/LogSign/SignUpBtn";

function Navbar(){
    return(
        <div className="flex justify-around items-center pb-[1em] pt-[1em]">
                <Logo/>
                <Layout/>
                <Searcher />
                <div className="flex gap-1 bg-black">
                    <LogInBtn/>
                    <SignUpBtn/>
                </div>
        </div>
    )
}

export{
    Navbar
}

