import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Manga() {
	const [mangas, setMangas] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [page, setPage] = useState(1)

	useEffect(() => {
		async function load() {
			try {
				setIsLoading(true)
				setError(null)
				const response = await fetch(`http://localhost3000/api/manga?page=${page}`)
				if (!response.ok) throw new Error("Couldn`t load mangas!")
				const data = await response.json()
				setMangas(data.results)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}

		load()
	}, [page])

	return (
		mangas?.map((manga) => (
			<li key={manga.id}>
				<Link to={`/manga/${manga.id}`}>{manga.name}</Link>
			</li>
		))
	)
}

export {
	Manga
}