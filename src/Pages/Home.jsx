import { About } from "../Components/Molecules/Searcher";
import { Layout } from "../Components/Layout";
import { Logo } from "../Components/Atoms/Logo";
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