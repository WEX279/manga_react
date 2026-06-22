import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Characters } from './Pages/Characters';
import { CharacterDetail } from './Pages/CharacterDetail';
import { Manga } from './Pages/Manga';
import { MangaCard } from './Pages/MangaCard';
import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';
import { ThemeContext } from './context/ThemeContext';
import { RegisterForm } from './Components/RegisterForm';


function App() {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home'/>
            <Route path='/manga' element={
              <div>
                <Home/>
                <div className='catalog'>
                  <Manga/>
                </div>
              </div>
            }/>
            <Route path='/manga/:_id' element={
              <div>
                <Home/>
                <MangaCard/>
              </div>
            }/>
            <Route path='/characters' element={<div>
                <Home/>
                <Characters/>
              </div>}/>
            <Route path='/characters/:id' element={<div>
                <Home/>
                <CharacterDetail/>
              </div>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/test' element={<RegisterForm/>} />

        </Routes>
      </ThemeContext.Provider>
  )
}

export {
  App
}