import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './Pages/Home'; 
import { About } from './Pages/About';
import { Characters } from './Pages/Characters';

function App() {

  return (
    <div>
      <nav>
        <Link to="/Home">Inicio</Link> | <Link to="/About">About us</Link> | <Link to="/Characters">Personajes</Link>
      </nav>

      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Characters' element={<Characters/>}/>
      </Routes>
    </div>
  )
}

export {
  App
}