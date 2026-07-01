import { Manga } from "../Components/Organisms/Manga";

function Catalog() {
    return(
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-[2em] justify-around p-[2em] bg-Dark text-Light light:bg-Light light:text-Dark">
                <Manga/>
            </div>
                
        </div>
    )
}

export{
    Catalog
}