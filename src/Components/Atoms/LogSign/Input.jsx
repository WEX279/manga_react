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
            className="border rounded-full p-1 border-Light placeholder-Light light:border-Dark light:placeholder-Dark light:text-Dark text-Light"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder="Email"
            ref={inputRef}/>
    )}else if(Focus==="Password"){
        return(
            <input
            className="border rounded-full p-1 border-Light placeholder-Light light:border-Dark light:placeholder-Dark  light:text-Dark text-Light"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder="Password"
            />
        )
    } else if(Focus==="Confirm password"){
        return(
            <input className="border rounded-full p-1 border-Light placeholder-Light light:border-Dark light:placeholder-Dark light:text-Dark text-Light"
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