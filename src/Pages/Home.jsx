import MovieCard from "../Components/MovieCards"
import { useState , useEffect } from "react"
import { getPopular , searchMovies } from "../Services/api"
export default function Home(){
    const [target , setTarget] = useState("") 
    const [movies , setMovies] = useState([])
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopular()
                console.log("Fetched popular movies:", popularMovies);
                setMovies(popularMovies)
            } catch(err){
                console.log(err)
                setError("Failed to load Movies...")
            }finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    },[])



    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(target)
        setTarget("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Search for a movie..." className="search-input" value={target} onChange={(e)=> setTarget(e.target.value)}/>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie)=>(
                   <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}