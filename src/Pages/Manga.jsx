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
				const response = await fetch(`http://localhost:3000/api/manga`)
				if (!response.ok) throw new Error("Couldn`t load mangas!")
				const data = await response.json()
				setMangas(data)
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
		<div key={manga.id}>
			<Link to={`/manga/${manga._id}`}><img src={manga?.image} alt={manga?.name}/></Link>           
            <h2>{manga?.name}</h2>

			<hr/>
        </div>
		))
	)
}

export {
	Manga
}