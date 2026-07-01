import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loading } from "../Atoms/Loading";
const API = import.meta.env.VITE_API_URL;



function Manga() {
	const [mangas, setMangas] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [page, setPage] = useState(1)
	const limit = useState(20)


	useEffect(() => {
		async function load() {
			try {
				setIsLoading(true)
				setError(null)
				const response = await fetch(`${API}/manga?page=${page}&limit=${limit}`)
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
		<div >
			<div className="grid grid-cols-3 gap-[2em] sm:grid-cols-4 md:grid-cols-5 2xl:grid-cols-7">

			{mangas?.map((manga) => (
				<div>
					<div key={manga._id} >
						<section className="w-20 md:w-32 2xl:w-50">
							<Link to={`http://localhost:5173/manga/${manga._id}`} className="flex justify-center w-20 md:w-32 md:h-45 2xl:w-50 2xl:h-70"><img src={manga?.image} alt={manga?.name} className="flex justify-center w-20 h-30 md:w-32 md:h-45 2xl:w-50 2xl:h-70"/></Link>           
						<h2 className="flex justify-center bg-Dark text-Light light:bg-Light light:text-Dark">{manga?.name}</h2>
						</section>
					</div>
				</div>
			))}
				</div>
			
			<div className="flex justify-center pt-[2em] ">
				<div className="flex gap-5">
					<button disabled={ page === 1} className="flex justify-center font-bold rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16  duration-300 light:text-Light light:bg-Dark light:hover:bg-secondary" onClick={()=> setPage(prev => Math.max(1, prev -1))}>
							Prev
					</button>

					<button className="flex justify-center font-bold rounded-2xl text-black bg-secondary hover:bg-secondaryAlt w-16 duration-300 light:text-Light light:bg-Dark light:hover:bg-secondary" onClick={()=> setPage(prev => prev +1)}>
							Next
					</button>
				</div>
			</div>
		</div>
	)
}

export {
	Manga
}