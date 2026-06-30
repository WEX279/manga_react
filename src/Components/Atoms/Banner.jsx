import { BookShelf } from "../../../Assets/BookShelf"
import { Kojima } from "../../../Assets/Kojima"
import { TextPlaceholder } from "./TextPlaceholder"

// function refresh() {
//     window.location.reload()
// }

function Banner(){

    return(
        <div className=" bg-Dark light:bg-Light">
            <div className="flex justify-center flex-col ">
                    <section className="flex flex-col ">
                        <img src={BookShelf} className="rounded-4xl w-[80vw] light:border-Dark opacity-70 self-center "/>

                        <div className=" flex  p-[2em] text-fourth light:text-fourthAl justify-center">
                            <h1 className="flex font-bold text-[4em]">Descubre tu nuevo manga favorito, aquí.</h1>
                        </div>
                    </section>
                    <section className="text-Light light:text-Dark p-[3em] flex ">
                        <div className="flex flex-col max-w-[50vw]">
                            <h2 className="text-fourth font-bold text-[2em] light:text-fourthAlt">Chatgpt es subnormal</h2>
                            <TextPlaceholder/>
                        </div>

                        <div className="flex justify-center self-start p-[3em]">
                            <img src={Kojima}/>
                        </div>
                    </section>
            </div>
        </div>
    )
}

export{
    Banner
}