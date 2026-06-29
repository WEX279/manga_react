import { Navbar } from "../Organisms/Navbar";
import { Outlet } from "react-router-dom";
import { SwitchTheme } from '../Molecules/ThemeSwitcher'

function BasicStructure(){
    return(
        <div>
           <Navbar/> 
           <SwitchTheme/>
                <main  >
                    <Outlet />
                </main>
        </div>
    )
}

export{
    BasicStructure
}