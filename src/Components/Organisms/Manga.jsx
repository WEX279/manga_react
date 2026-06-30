import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loading } from "../Atoms/Loading";
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
	
	if(isLoading)return(<Loading/>)
	if(error)return(
	<p>
		Error fetching mangas
	</p>
		)
		

	return (
		mangas?.map((manga) => (
		<div key={manga._id} >
			<section className="flex flex-col  w-40 ">
				<Link to={`http://localhost:5173/manga/${manga._id}`} className="flex justify-center w-40"><img src={manga?.image} alt={manga?.name} className="flex justify-center w-40 h-60"/></Link>           
            <h2 className="flex justify-center w-40 bg-Dark text-Light light:bg-Light light:text-Dark">{manga?.name}</h2>
			</section>
        </div>
		))
	)
}

export {
	Manga
}