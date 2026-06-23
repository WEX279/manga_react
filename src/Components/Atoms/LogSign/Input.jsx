// import { useRef, useEffect } from "react"

function Input({Focus}){
//         const inputRef = useRef(null)

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[]
// )
    if(Focus==="Here"){
        return (
            <input className="border rounded-full max-w" />
            // ref={inputRef}/>
    )}else{
        return(
            <input className="border rounded-full"/>
        )
    }
}

export{
    Input
}