import { useRef, useEffect } from "react"

function Input({Focus, ...props }){
    const inputRef = useRef(null)

    useEffect(()=>{
        if(Focus==="Email" || Focus==="Name"){
        inputRef.current.focus()}
    },[Focus]
)
    if(Focus==="Email" ){
        return (
            <input 
            className="border rounded-full max-w border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            placeholder="Email"
            ref={inputRef}
            {...props}/>
    )}else if(Focus==="Password"){
        return(
            <input
            className="border rounded-full max-w border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            placeholder="Password"
            />
        )
    } else if(Focus==="Confirm password"){
        return(
            <input className="border rounded-full max-w  border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            placeholder="Confirm "/>
        )
    }
}

export{
    Input
}