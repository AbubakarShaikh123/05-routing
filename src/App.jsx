import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Users from './pages/Users'

import { Router, Routes, Route } from 'react-router-dom'
import Routing from './utils/Routing'


function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <Routing/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/users' element={<Users/>} />
      </Routes> */}
    </div>

  )
}

export default App