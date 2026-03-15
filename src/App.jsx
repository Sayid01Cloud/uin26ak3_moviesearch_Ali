import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'
import Layout from './Komponenter/Layout'
import MovieCard from './Komponenter/MovieCard'
import Movies from './Komponenter/Movies'
import './App.css'

function App() {
  return (
    
      <Routes>
        <Route element={<Layout />} />
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
  )
}

export default App
