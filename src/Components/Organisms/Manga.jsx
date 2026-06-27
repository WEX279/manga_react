import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const API = import.meta.env.VITE_API_URL;



function Manga() {
	const [mangas, setMangas] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [page] = useState(1)


	useEffect(() => {
		async function load() {
			try {
				setIsLoading(true)
				setError(null)
				const response = await fetch(`${API}/manga`)
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
		<div key={manga.id} >
			<section className="flex flex-col  w-50">
				<Link to={`http://localhost:5173/manga/${manga._id}`} className="flex justify-center w-50"><img src={manga?.image} alt={manga?.name} className="flex justify-center w-50"/></Link>           
            <h2 className="flex justify-center w-50">{manga?.name}</h2>
			</section>
        </div>
		))
	)
}

export {
	Manga
}