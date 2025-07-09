
import './App.css'
import MovieCard from './Components/MovieCards'
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import { Routes , Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
    </main>
    </div>
  )
}

export default App
