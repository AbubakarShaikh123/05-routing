import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100%]  h-[100px] p-3 hover:p-2 transition-all cursor-pointer flex  justify-center'>

       <div className='w-[100%]  h-[100%]  bg-zinc-600 rounded-md shadow-xl hover:shadow-white flex items-center justify-between px-9 '>
           <NavLink to="/" className='text-4xl font-bold  transition-all hover:text-gray-300'>Logo</NavLink>
           <div className='flex gap-10 text-2xl font-bold '> 
             <NavLink to='/'   className=" hover:text-[burlywood] transition-all a" >Home</NavLink>
             <NavLink to='/about'  className=" hover:text-[burlywood] transition-all a">About</NavLink>
             <NavLink to='/contact'  className=" hover:text-[burlywood] transition-all a" >Contact</NavLink>
             <NavLink to='/users'  className=" hover:text-[burlywood] transition-all a" >Users</NavLink>

            
           </div>
       </div>
    </div>
  )
}

export default Navbar