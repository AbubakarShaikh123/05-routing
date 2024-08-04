import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Userinfo() {

    const{username , name, email, occupation , age , id} = useParams()

    const navigate = useNavigate()

  return (
    
    <div className='bg-zinc-600 w-[90%] h-[58vh] hover:w-[90%] hover:h-[58vh] shadow-2xl  transition-all mt-16 mb-16 pb-5 pt-2 px-2 rounded-md flex flex-col  items-center justify-between  cursor-pointer '>
      <div className='w-[100%] h-[20px] '><button onClick={()=>navigate(-1)} className='border px-3 py-[2px] rounded-sm bg-transparent flex items-center justify-center hover:scale-105 transition-all hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white hover:font-bold active:text-white' >back</button></div>
       <div className=' px-5 w-[50%] h-[80%] border rounded-md hover:shadow-2xl  hover:scale-105 transition-all flex flex-col items-start justify-center gap-3 '>
          <p className='text-xl font-bold'> <span className='text-[burlywood]'>ID : </span> {id}</p>
          <p className='text-xl font-bold'> <span className='text-[burlywood]'>Name : </span> {name}</p>
          <p className='text-xl font-bold'> <span className='text-[burlywood]'>Age : </span> {age}</p>
          <p className='text-xl font-bold'><span className='text-[burlywood]'>Username : </span> {username}</p>
          <p className='text-xl font-bold'><span className='text-[burlywood]'>Email : </span> {email}</p>
          <p className='text-xl font-bold'> <span className='text-[burlywood]'>Occupation : </span> {occupation}</p>

       </div>
       {/* <h1 className='text-xl font-bold'>{username}{name}{email}{occupation}{age}</h1> */}
    </div>

  )
}

export default Userinfo