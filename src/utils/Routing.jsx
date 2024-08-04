import React from 'react'




import { Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Users from '../pages/Users'
import Userinfo from '../pages/Userinfo'



function Routing() {
  return (
    <div className='w-[100%] flex justify-center'>
        <Routes>
         <Route path='/user/:username/:name/:email/:occupation/:age/:id' element={<Userinfo/>} />
         <Route path="/" element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/users' element={<Users/>} />
      </Routes>
    </div>
  )
}

export default Routing