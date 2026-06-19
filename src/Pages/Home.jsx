import { About } from "../Components/About";
import { Layout } from "../Components/Layout";
import { Logo } from "../Components/Logo";
import { LogSign } from "../Components/LogSign";

function Home(){
    return(
        <div>
            <div className="navBar">
                <Logo/>
                <Layout/>
                <About/>
                <LogSign/>
            </div>
            <hr/>
        </div>
    )
}

export{
    Home
}