import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Components/Atoms/Loading";

function MangaCard(){
    const {_id} = useParams()
    const [manga, setManga] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function manga() {
            try {
            setIsLoading(true)
            const response = await fetch (`http://localhost:3000/api/manga/${_id}`)
            if(!response.ok) throw new Error( "Error fetching mangas")
            setManga(await response.json())
            } catch (error) { 
                setError(error)
            } finally{
            setIsLoading(false)
            }
        }
        manga()
    },[_id])

    if(isLoading)return(<Loading/>)
    if(error)return<p>Something happened fetching your mangas</p>

    return(
        <div className="flex items-center justify-center p-[2em] bg-Dark text-Light light:bg-Light light:text-Dark min-h-[calc(100vh-69px)]">
            <img src={manga?.image} alt={manga?.name} />
            <div className="flex flex-col justify-center p-[2em] gap-[1em] ">
                <h2 className="font-bold text-3xl">{manga?.name}</h2>
                <p ><strong>Author: </strong> {manga?.author}</p>
                <p ><strong>First published: </strong>{manga?.release}</p>
                <p ><strong>Genre & topics: </strong>{manga?.genre}</p>
            </div>
        </div>
    )
}

export{
    MangaCard
}
