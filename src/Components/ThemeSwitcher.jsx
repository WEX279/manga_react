import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SwitchTheme(){
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <button onClick={() => setTheme(theme === "☀️" ? "🌙": "☀️")}>
            Actual theme: {theme}
        </button>
    )
}

export {
    SwitchTheme
}