import MovieCard from "../Components/MovieCards"
import { useState } from "react"
export default function Home(){
    const [target , setTarget] = useState("") 
    const movies = [
        {id:1 , title : "The Matrix" , release_date:2020},
        {id:2 , title : "The Avengers" , release_date:2011},
        {id:3 , title : "Alien" , release_date:1998}
    ]
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