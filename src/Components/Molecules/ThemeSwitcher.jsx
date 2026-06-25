import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function SwitchTheme(){
    const {theme, setTheme} = useContext(ThemeContext)

    const root = window.document.documentElement

    useEffect(()=>{
        if(theme === "🌙"){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    },[theme])

    return(
        <button onClick={() => setTheme(theme === "☀️" ? "🌙": "☀️")}>
            {theme}
        </button>
    )
}

export {
    SwitchTheme
}