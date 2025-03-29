import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useData } from '../Context/AppContext';

function EditUser() {
  
  const {id} = useParams();
  const location = useLocation();
  const user = location.state;
  if(!user) {
    return <div className='absolute text-2xl font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>No user found</div>;
  }

  const [firstname, setfirstname] = useState(user.first_name)
  const [lastname, setlastname] = useState(user.last_name)
  const [email, setemail] = useState(user.email)
  const [avatar, setavatar] = useState(user.avatar)

  const {updateUser, navigate} = useData()

  const data = {
    id: id,
    first_name: firstname,
    last_name: lastname,
    email: email,
    avatar: avatar
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(id, data)
    navigate(`/user-list/page/1`);
    setfirstname(user.first_name)
    setlastname(user.last_name)
    setemail(user.email)
    setavatar(user.avatar)
  }
  
  return (
    <form onSubmit={(e)=>{
      handleSubmit(e);
    }}>
      <div className='w-full min-h-screen px-10 pt-8  bg-gradient-to-b from-cyan-200 to-white flex flex-col justify-center items-center gap-4'>
        <div className='flex flex-col gap-4'>
          <h1 className='px-4 font-semibold text-xl'>First Name</h1>
          <input className='text-black text-xl placeholder:text-gray-600 font-semibold outline-none rounded-2xl px-4 py-2 ' type="text"  placeholder='Enter first name' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='px-4 font-semibold text-xl'>Last Name</h1>
          <input className='text-black text-xl placeholder:text-gray-600 font-semibold outline-none rounded-2xl px-4 py-2 ' type="text"  placeholder='Enter last name' value={lastname} onChange={(e)=> setlastname(e.target.value) }/>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='px-4 font-semibold text-xl'>Email</h1>
          <input className='text-black text-xl placeholder:text-gray-600 font-semibold outline-none rounded-2xl px-4 py-2 ' type="text" placeholder='Enter email' value={email} onChange={(e)=> setemail(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='px-4 font-semibold text-xl'>Avatar</h1>
          <input className='text-black text-xl placeholder:text-gray-600 font-semibold outline-none rounded-2xl px-4 py-2 ' type="text" placeholder='Enter avatar' value={avatar} onChange={(e)=> setavatar(e.target.value)}/>
        </div>
        <button type="submit" className='text-white bg-emerald-600 font-semibold text-xl px-3 py-2 rounded-xl'> Update </button>
      </div>
    </form>
  )
}

export default EditUser