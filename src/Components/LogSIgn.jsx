import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogSign(){
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const sign= () =>{
        navigate('/signup')
    }

    const log= () =>{
        navigate('/login')
    }


    useEffect(()=>{
        inputRef.current.focus()
        
    },[])

    return(
        <div>
            <button className="logSign" onClick={sign}> Sign up</button>
            <button className="logSign" onClick={log} >Log in </button>
        </div>
    )
}

export{
    LogSign
}