import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Characters } from './Pages/Characters';
import { CharacterDetail } from './Pages/CharacterDetail';
import { Manga } from './Pages/Manga';
import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext value = {{theme, setTheme}}>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/manga' element={<Manga/>}/>
            <Route path='/manga/:id' element={<Manga/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/characters/:id' element={<CharacterDetail/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </ThemeContext>
  )
}

export {
  App
}