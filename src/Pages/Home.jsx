import { About } from "../Components/About";
import { Layout } from "../Components/Layout";
import { Logo } from "../Components/Logo";
import { LogSign } from "../Components/LogSign";
import { Header } from "../context/Header";

function Home(){
    return(
        <div>
            <div className="navBar">
                <Logo/>
                <Layout/>
                <About/>
                <Header/>
                <LogSign/>
            </div>
            <hr/>
        </div>
    )
}

export{
    Home
}