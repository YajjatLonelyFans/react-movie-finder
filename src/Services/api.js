const api_key = "063d1a0783aac9618fd3223d1c5a67f5"
const base_URL = "https://api.themoviedb.org/3/"

export const getPopular = async ()=>{
    const response  = await fetch(`${base_URL}/movie/popular?api_key=${api_key}`)
    const data =  await response.json()
    return data.results
}
export const searchMovies = async (query)=>{
    const response  = await fetch(`${base_URL}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}