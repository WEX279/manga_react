import { TextPlaceholder } from "../Components/Atoms/TextPlaceholder"

function About(){
    return(
        <div className="bg-Dark light:bg-Light">
            <h1 className="font-bold text-[3em] p-7">About Us!</h1>
            <TextPlaceholder/>
        </div>
    )
}

export{
    About
}