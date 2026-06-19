import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { SwitchTheme } from "../Components/ThemeSwitcher";
function Header() {
    const { theme } = useContext(ThemeContext)
    return(
    <div>
        <header className='theme'>Mi app - modo {theme}</header>
        <SwitchTheme/>
    </div>
    )
}

export{
    Header
}