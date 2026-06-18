import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
    const {id} = useParams();
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function load() {
            try {
                setIsloading(true)
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                if (!response.ok) throw new Error("Character not found")
                setCharacter(await response.json())
            }catch (error) {
                setError(error)
            } finally{
                setIsloading(false)
            }
        }
        load()
    }, [id])
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return(
        <div>
            <h2>{character?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
            <p>Status: {character?.status}</p>
            <p>Specie: {character?.species} </p>
        </div>
    )
}
export{
    CharacterDetail
}