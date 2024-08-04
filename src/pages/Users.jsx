import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'




function Users() {

  const navigate = useNavigate()

  const  [data, setData] = useState([])
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [occupation, setOccupation] = useState("")

 






  const fun = async ()=>{
    fetch('https://freetestapi.com/api/v1/users')
    .then((res)=>{
          return res.json()
    })
    .then((res)=>{
          setData(res)
    })
  }


  useEffect(()=>{
    fun()
  },[])



  useEffect(()=>{
     console.log(data);
     
  },[data])


  const addUser1 =  ()=>{
    setId(data.length)
    
       if (true) {
        addUser()
      }
    
    
  }


  const addUser = ()=>{
    
    if (name && age && username && email && occupation ) {
      
      console.log(id);
      
      setData((prev)=>{
        return [...prev , { name,age,username,email,occupation ,id:data.length+1}]
     })
     setName('')
     setAge('')
     setUsername('')
     setEmail('')
     setOccupation('')
     setId('')
     console.log(id);
     
    }
    else{
      alert("ERROR")
    }

  }

 



  return (
    <div className='bg-zinc-600 w-[90%] h-[auto] py-6  transition-all mt-16 mb-16 rounded-md flex flex-col items-center cursor-pointer shadow-xl'>
        <h1 className='text-3xl font-bold mt-7'>Users Page</h1>
        <div className='flex flex-wrap  justify-center gap-4 p-10 w-[100%] '>

           {
             data?.map((item,index)=>{
               return <button onClick={()=> navigate(`/user/${item.username}/${item.name}/${item.email}/${item.occupation}/${item.age}/${item.id}`)} key={index} className='bg-transparent border w-[150px] py-2 rounded-md hover:shadow-lg hover:font-bold hover:scale-105 transition-all hover:bg-white hover:text-black active:text-white  hover:shadow-white hover:border-black' > <abbr title={`ID:${item.id}`} className='no-underline' > {item.name} </abbr> </button>
             })
           }

        </div>

        <div className='w-[70%] h-[300px] border rounded-sm cursor-pointer'>
          <div className='w-[100%] h-[100%]'>
            <div  className='w-[100%] h-[100%] flex items-center justify-between px-10 '>
              <div className='flex flex-col items-center justify-center gap-3'>
                  <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Name...' required className='w-[250px] px-3 py-1  bg-transparent outline-none border rounded-md hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all' />
                  <input type="number" onChange={(e)=>setAge(e.target.value)} value={age} name="" id="" max='100' min='18' required placeholder='Enter age...'  className='w-[250px] px-3 py-1  bg-transparent outline-none border rounded-md  [&::-webkit-inner-spin-button]:appearance-none   hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all ' />
                  <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Enter username...' required className='w-[250px] px-3 py-1  bg-transparent outline-none border rounded-md   hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all ' />
                  <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" value={email} placeholder='Enter Email...'  required className='w-[250px] px-3 py-1  bg-transparent outline-none border rounded-md   hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all ' />
                  <input type="text" onChange={(e)=>setOccupation(e.target.value)} value={occupation}  placeholder='Enter Occupation...' required  className='w-[250px] px-3 py-1  bg-transparent outline-none border rounded-md  hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all ' />
              </div>
              <button onClick={addUser1}  className='border px-4 py-2 rounded-md text-[burlywood] font-bold text-xl  hover:bg-white hover:text-black hover:font-bold hover:border-black hover:shadow-md hover:shadow-white hover:scale-105 transition-all active:text-[burlywood]'>Add User</button>
            </div>
          </div>
        </div>

        

        {/* <button onClick={()=>navigate('/about')} className='border px-4 py-2 rounded-md'>Navigate</button> */}


    </div>
  )
}

export default Users