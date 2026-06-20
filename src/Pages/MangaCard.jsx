import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MangaCard() {
    const { _id } = useParams()
    const [ manga, setManga ] = useState(null)
    const [ isLoading, setIsloading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        async function manga() {
            try {
                setIsloading(true)
                const response= await fetch(`http://localhost:3000/api/manga/${_id}`)
                if(!response.ok) throw new Error("Manga not found") 
                setManga(await response.json())
            } catch (error) {
                setError(error);
            } finally{
                setIsloading(false)
            }
        }
        manga()
    },[_id])
    
    // console.log(manga._id)
    if(isLoading) return(<p>Loading...</p>)
    if(error) return <p>Something happened and couldn`t fetch your manga</p>

    return(
        <div className="mangaCard">
            <img src={manga?.image} alt={manga?.name}/>
            <h2>{manga?.name}</h2>
            <p>{manga?.author}</p>
            <p>{manga?.release}</p>
            <p>{manga?.genre}</p>
        </div>
    )
}

export{
    MangaCard
}