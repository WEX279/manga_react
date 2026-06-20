import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Characters } from './Pages/Characters';
import { CharacterDetail } from './Pages/CharacterDetail';
// import { Manga } from './Pages/Manga';
import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';
import { ThemeContext } from './context/ThemeContext';
import { MangaCard } from './Pages/MangaCard';
import { Pages } from './Pages/Page';

function App() {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home' />
            <Route path='/manga' element={<Pages/>}/>
            <Route path='/manga/:_id' element={<MangaCard/>}/>
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