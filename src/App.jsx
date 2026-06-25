import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Navbar } from './Components/Organisms/Navbar';
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
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
            <Route path='/' element={<Navbar/>}>
              <Route path='home' element={<Home/>}/>
              <Route path='/manga' element={<Catalog/>}/>
              <Route path='/manga/:_id' element={<MangaCard/>}/>
              <Route path='/about' />
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