import { useState } from "react"

function NextBtn(){
    const [setPage] = useState(1)
    return(
        <button className="flex justify-center font-bold rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16 duration-300 light:text-Light light:bg-Dark light:hover:bg-secondary" onClick={()=> setPage(prev => prev +1)}>
            Next
        </button>
    )
}

export {
    NextBtn
}