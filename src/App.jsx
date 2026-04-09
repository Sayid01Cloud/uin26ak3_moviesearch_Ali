import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'
import Layout from './Komponenter/Layout'
import './App.css'

function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:title' element={<MoviePage />} />
        </Route>
      </Routes>
  )
}

export default App
