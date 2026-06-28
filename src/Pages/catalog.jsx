import { Manga } from "../Components/Organisms/Manga";

function Catalog() {
    return(
        <div className="flex flex-wrap gap-[2em] justify-around p-[2em] bg-white dark:bg-black">
            <Manga/>
        </div>
    )
}

export{
    Catalog
}