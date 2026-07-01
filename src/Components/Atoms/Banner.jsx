import { BookShelf } from "../Atoms/Pics/BookShelf"

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
                            <h2 className="text-fourth font-bold text-[2em] light:text-fourthAlt">El placer de leer</h2>
                            <p>Explora historias que inspiran, emocionan y sorprenden. Desde grandes clásicos hasta las últimas novedades, MangaSync ofrecehistorias con aventuras, personajes inolvidables y universos llenos de creatividad. Disfruta del placer de leer, descubre nuevas historias y deja que cada página te enseñe algo diferente, ya sea sobre la amistad, el esfuerzo, el crecimiento personal o la imaginación. Aquí encontrarás un espacio pensado para quienes disfrutan del manga y siempre están buscando su próxima gran lectura.</p>
                        </div>

                        <div className="flex justify-center self-start p-[3em] flex-col">
                        </div>
                    </section>
            </div>
        </div>
    )
}

export{
    Banner
}