import { Navbar } from "../Organisms/Navbar";
import { Outlet } from "react-router-dom";
import { SwitchTheme } from '../Molecules/ThemeSwitcher'
import { Footer } from "../Organisms/Footer";

function BasicStructure(){
    return(
        <div>
           <Navbar/> 
           <SwitchTheme/>
                <main  >
                    <Outlet />
                </main>
            <Footer/>
        </div>
    )
}

export{
    BasicStructure
}