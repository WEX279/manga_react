import './App.css'
import { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { Navbar } from './Components/Organisms/Navbar';
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
import { MangaCard } from './Pages/MangaCard';
import { ThemeContext } from './context/ThemeContext';
import { RegisterForm } from './Pages/RegisterForm';
import { SignUpForm } from './Pages/SignUpForm';
import { LoginForm } from './Pages/LoginForm';
import { PrivateRoute } from './Components/PrivateRoute';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';

function App() {
  const [theme, setTheme] = useState('☀️')

  return (
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <Routes>

            <Route path='/' element={<Navbar/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/manga' element={<Catalog/>}/>
              <Route element={<PrivateRoute/>}>
                <Route path='/manga/:_id' element={<MangaCard/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/account' element={<Profile/>}/>

              </Route>
            </Route>  

          <Route path='/signup' element={<SignUpForm/>}/>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/retest' element={<RegisterForm/>} />

        </Routes>
      </ThemeContext.Provider>
  )
}

export {
  App
}