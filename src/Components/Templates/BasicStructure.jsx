import { Navbar } from "../Organisms/Navbar";
import { Outlet } from "react-router-dom";
import { SwitchTheme } from '../Molecules/ThemeSwitcher'

function BasicStructure(){
    return(
        <div className='bg-black text-white'>
           <Navbar/> 
           <SwitchTheme/>
            <hr/>
                <main >
                <Outlet />
                </main>
        </div>
    )
}

export{
    BasicStructure
}