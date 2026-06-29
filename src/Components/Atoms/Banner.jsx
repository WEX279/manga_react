import { Logo } from "./Logo"
function Banner(){
    return(
        <div className=" bg-Dark light:bg-Light min-h-[calc(100vh-69px)]">

        <div className="p-[2em] max-h-fit">

        <div className="bg-thirdaryAlt  rounded-3xl h-40">
            <section className="pt-4 pl-4">
                <Logo className=""/>
            </section>
            <h2 className="font-semibold p-[1em] max-w-">Todo el mundo del manga, en un solo lugar. Descubre nuevas series, organiza tus favoritas y no pierdas el hilo con MangaSync </h2>
            <p></p>
        </div>
        </div>
        </div>
    )
}

export{
    Banner
}