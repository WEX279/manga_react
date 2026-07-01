import { Layout } from "../Molecules/Layout";
import { Logo } from "../Atoms/Logo";
import { UserBtn } from "../Molecules/UserBtn";

function Navbar(){
    return(
        <div className="flex justify-around items-center p-[1em] sticky top-0 bg-slate-900 text-white light:bg-Light light:text-Dark z-50">
                <Logo/>
                <Layout/>
                <UserBtn/>
        </div>
    )
}

export{
    Navbar
}

