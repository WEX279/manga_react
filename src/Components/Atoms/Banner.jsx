import { BookShelf } from "../../../Assets/BookShelf"
import { Kojima } from "../../../Assets/Kojima"

function Banner(){
    return(
        <div className=" bg-Dark light:bg-Light min-h-[calc(100vh-69px)] ">
            <div className="flex justify-center flex-col ">
                    <section className="flex flex-col relative self-center max-h-[50vh]">
                        <img src={BookShelf} className="rounded-4xl w-[90vw] light:border-Dark opacity-70"/>

                        <div className=" flex absolute inset-0 items-center p-[2em] text-fourth light:text-fourthAlt">
                            <h1 className="font-bold text-[4em] ">Descubre tu nuevo manga favorito, aquí.</h1>
                        </div>
                    </section>
                    <div>
                        <section className="text-Light light:text-Dark p-[3em] flex ">
                            <div className="flex flex-col max-w-[50vw]">
                                <h2 className="text-fourth font-bold text-[2em] light:text-fourthAlt">Chatgpt es subnormal</h2>
                                <p>miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau

                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                    miau miau miau miau miau miau miau miau miau miau
                                </p>
                            </div>

                            <div className="flex justify-center self-start p-[3em]">
                                <img src={Kojima}/>
                            </div>
                        </section>
                    </div>
            </div>
        </div>
    )
}

export{
    Banner
}