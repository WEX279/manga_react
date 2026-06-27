import { useRef, useEffect } from "react"

function Input({Focus, value, onChange, type, name }){
    const inputRef = useRef(null)

    useEffect(()=>{Focus
        if(Focus==="Email"){
        inputRef.current.focus()}
    },[Focus]
)
    if(Focus==="Email" ){
        return (
            <input 
            className="border rounded-full max-w border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder="Email"
            ref={inputRef}/>
    )}else if(Focus==="Password"){
        return(
            <input
            className="border rounded-full max-w border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder="Password"
            />
        )
    } else if(Focus==="Confirm password"){
        return(
            <input className="border rounded-full max-w  border-black dark:border-white dark:placeholder-white p-1 dark:text-white"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder="Confirm password"/>
        )
    }
}

export{
    Input
}