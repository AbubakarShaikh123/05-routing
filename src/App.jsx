import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

import { Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>

  )
}

export default App