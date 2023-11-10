import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Createuser from './Components/Createuser'
import User from './Components/User'
import Edituser from './Components/Edituser'

const App = () => {
  return (
   <BrowserRouter>
   <Home></Home>

   <Routes>
    <Route element={<Createuser/>} path='/'></Route>
    <Route element={<User/>} path='/user'></Route>
    <Route element={<Edituser/>} path='/edit/:abc'></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
