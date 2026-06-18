import { About } from "../Components/About";
import { Layout } from "../Components/Layout";
import { Logo } from "../Components/Logo";

function Home(){
    return(
        <div>
            <div className="navBar">
                <Logo/>
                <Layout/>
                <About/>
            </div>
            <hr/>
        </div>
    )
}

export{
    Home
}