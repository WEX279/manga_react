import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../../Assets/sun-svgrepo-com.svg"
import moonIcon from "../../../Assets/moon-svgrepo-com.svg"

function SwitchTheme(){
    const {theme, setTheme} = useContext(ThemeContext)

    const root = window.document.documentElement

    useEffect(()=>{
        if(theme === <img src={sunIcon}/>){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    },[theme])

    return(
        <button className="fixed bottom-[2em] right-[2em] w-[2em]" onClick={() => setTheme(theme === <img src={sunIcon}/> ? < img src={moonIcon}/>: <img src={sunIcon}/>)}>
            {theme}
        </button>
    )
}

export {
    SwitchTheme
}