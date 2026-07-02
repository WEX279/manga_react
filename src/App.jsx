import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { BasicStructure } from './Components/Templates/BasicStructure';
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
import { MangaCard } from './Pages/MangaCard';
import { ThemeContext } from './context/ThemeContext';
import { SignUpForm } from './Pages/SignUpForm';
import { LoginForm } from './Pages/LoginForm';
import { PrivateRoute } from './Components/PrivateRoute';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';

function App() {
  const [theme, setTheme] =  useState(localStorage.getItem("theme") || "dark")
  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div className='{theme}' >
        <Routes >
            
              <Route path='/' element={<BasicStructure/>}>
                <Route index element={<Home/>}/>
                <Route path='/manga' element={<Catalog/>}/>
                <Route path='/about' element={<About/>}/>

                <Route element={<PrivateRoute/>}>
                  <Route path='/manga/:_id' element={<MangaCard/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                </Route>
              </Route>  
            
            <Route path='/signup' element={<SignUpForm/>}/>
            <Route path='/login' element={<LoginForm/>} />

        </Routes>
        </div>
      </ThemeContext.Provider>
  )
}

export {
  App
}