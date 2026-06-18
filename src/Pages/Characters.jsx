import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Characters() {
	const [characters, setCharacters] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [page, setPage] = useState(1)

	useEffect(() => {
		async function load() {
			try {
				setIsLoading(true)
				setError(null)
				const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}?limit=${50}`)
				if (!response.ok) throw new Error("No se pudo cargar el personaje")
				const data = await response.json()
				setCharacters(data.results)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}

		load()
	}, [page])

	return (
		characters?.map((character) => (
			<li key={character.id}>
				<Link to={`/characters/${character.id}`}>{character.name}</Link>
			</li>
		))
	)
}

export {
	Characters
}