import { About } from "../Components/About";
import { Layout } from "../Components/Layout";
import { Logo } from "../Components/Logo";

function Home(){
    return(
        <div className="navBar">
            <Logo/>
            <Layout/>
            <About/>
            <hr/>
        </div>
    )
}

export{
    Home
}