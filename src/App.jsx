import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Characters } from './Pages/Characters';
import { CharacterDetail } from './Pages/CharacterDetail';

import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';
import { ThemeContext } from './context/ThemeContext';

import { MangaPages } from './Pages/Compos/MangaPages';
import { MangaCardPages } from './Pages/Compos/MangaCardPages';

function App() {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home' />
            <Route path='/manga' element={<MangaPages/>}/>
            <Route path='/manga/:_id' element={<MangaCardPages/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/characters/:id' element={<CharacterDetail/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </ThemeContext.Provider>
  )
}

export {
  App
}