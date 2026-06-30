import { useRef, useEffect } from "react"
import { MangaCard } from "../../Pages/MangaCard"
function Input(){
    const inputRef = useRef(null)
    

    return <input placeholder="Buscar" className="pl-1 border-0 text-Dark focus:outline-none focus:ring-0"></input>
}

export{
    Input
}