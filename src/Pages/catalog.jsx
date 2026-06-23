import { Manga } from "../Components/Organisms/Manga";

function Catalog() {
    return(
        <div className="flex flex-wrap gap-[2em] justify-around m-[2em]">
            <Manga/>
        </div>
    )
}

export{
    Catalog
}