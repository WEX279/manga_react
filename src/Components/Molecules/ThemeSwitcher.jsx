import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../../Assets/sun-svgrepo-com.svg"
import moonIcon from "../../../Assets/moon-svgrepo-com.svg"

function SwitchTheme(){
    const {theme, setTheme} = useContext(ThemeContext)
    

    useEffect(()=>{
        const root = window.document.documentElement
        if(theme === "light"){
            root.classList.add("light")
        }else{
            root.classList.remove("light")
        }
        localStorage.setItem("theme", theme)
    },[theme])

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
        }

    return(
        <div >
        <button className="fixed bottom-[2em] right-[2em] w-[3em] bg-primary rounded-3xl p-1 hover:bg-primaryAlt duration-300 z-50" onClick={toggleTheme}>
            <img src={theme==="dark" ? moonIcon : sunIcon}/>
        </button>
        </div>
    )
}

export {
    SwitchTheme
}