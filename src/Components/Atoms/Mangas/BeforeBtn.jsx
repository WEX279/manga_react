import { useState } from "react"

function BeforeBtn(){
    const [Page, setPage] = useState(1)
    return(
        <button className="flex justify-center font-bold rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16 duration-300 light:text-Light light:bg-Dark light:hover:bg-secondary" onClick={()=> setPage(prev => Math.max(1, prev, -1))}>
            Prev
        </button>
    )
}

export {
    BeforeBtn
}