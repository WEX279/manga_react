import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Home } from './Components/Organisms/Home';
import { Manga } from './Pages/Manga';
import { MangaCard } from './Pages/MangaCard';
import { Signup } from './Pages/SignUp';
import { Login } from './Pages/LogIn';
import { ThemeContext } from './context/ThemeContext';
import { RegisterForm } from './Pages/RegisterForm';


function App() {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <Routes>
            <Route path='/' element={<Home/>}>
              <Route path='Home'/>
              <Route path='/manga' element={<Manga/>}/>
              <Route path='/manga/:_id' element={<MangaCard/>}/>
            </Route>  
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