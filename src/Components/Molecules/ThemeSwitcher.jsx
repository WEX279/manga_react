import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../../Assets/sun-svgrepo-com.svg"
import moonIcon from "../../../Assets/moon-svgrepo-com.svg"

function SwitchTheme(){
    const {theme, setTheme} = useContext(ThemeContext)

    const root = window.document.documentElement

    useEffect(()=>{
        if(theme === "dark"){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    },[theme])

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <div >
        <button className="fixed bottom-[2em] right-[2em] w-[3em] bg-primary rounded-3xl p-1 hover:bg-primaryAlt duration-300" onClick={toggleTheme}>
            <img src={theme==="light" ? sunIcon : moonIcon}/>
        </button>
        </div>
    )
}

export {
    SwitchTheme
}