import './App.css'
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Characters } from './Pages/Characters';
import { CharacterDetail } from './Pages/CharacterDetail';
import { Manga } from './Pages/Manga';
import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/manga' element={<Manga/>}/>
          <Route path='/manga/:id' element={<Manga/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>} />
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/characters/:id' element={<CharacterDetail/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
  )
}

export {
  App
}