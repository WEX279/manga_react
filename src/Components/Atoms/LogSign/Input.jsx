import { useRef, useEffect } from "react"

function Input({Focus}){
    const inputRef = useRef(null)

    useEffect(()=>{
        if(Focus==="Here"){
        inputRef.current.focus()}
    },[Focus]
)
    if(Focus==="Email" ){
        return (
            <input className="border rounded-full max-w border-black dark:border-white dark:placeholder-white password p-1 dark:text-white"  placeholder="Email"
            ref={inputRef}/>
    )}else if(Focus==="Password"){
        return(
            <input className="border rounded-full max-w border-black dark:border-white dark:placeholder-white password p-1 dark:text-white"  placeholder="Password"/>
        )
    } else if(Focus==="Confirm password"){
        return(
            <input className="border rounded-full max-w  border-black dark:border-white dark:placeholder-white password p-1 dark:text-white"  placeholder="Confirm "/>
        )
    }
}

export{
    Input
}