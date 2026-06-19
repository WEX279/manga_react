import { useContext } from "react";
import { SwitchTheme } from "../Components/ThemeSwitcher";
function Header() {
    const theme = useContext(SwitchTheme)
    return(
    <div>
        <header className={theme}>Mi app - modo {theme}</header>
        <SwitchTheme/>
    </div>
    )
}

export{
    Header
}