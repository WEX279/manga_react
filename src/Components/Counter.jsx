import { useRef, useEffect } from "react";

function SearchFile(){
    const inputRef = useRef(null)
    
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return(
        <input ref={inputRef} placeholder="ingaturroña"/>
    )
}

export{
    SearchFile
}