import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

    if(isLoading)return<p>Loading...</p>
    if(error)return<p>Something happened fetching your mangas</p>

    return(
        <div className="mCard">
            <img src={manga?.image} alt={manga?.name} className="mImg"/>
            <div className="mTxt">
                <h2 className="mName">{manga?.name}</h2>
                <p className="mAuth"><strong>Author: </strong>{manga?.author}</p>
                <p className="mRelease"><strong>First published: </strong>{manga?.release}</p>
                <p className="mGenre"><strong>Genre & topics: </strong>{manga?.genre}</p>
            </div>
        </div>
    )
}

export{
    MangaCard
}
