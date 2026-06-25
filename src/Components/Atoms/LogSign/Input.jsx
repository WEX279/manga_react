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
            <input className="border rounded-full max-w border-white placeholder-white password p-1 text-white"  placeholder="Email"
            ref={inputRef}/>
    )}else if(Focus==="Password"){
        return(
            <input className="border rounded-full max-w border-white placeholder-white password p-1 text-white"  placeholder="Password"/>
        )
    } else if(Focus==="Confirm password"){
        return(
            <input className="border rounded-full max-w border-white placeholder-white password p-1 text-white"  placeholder="Confirm "/>
        )
    }
}

export{
    Input
}