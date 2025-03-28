import React from 'react'
import { PiSignOutBold } from "react-icons/pi";

function Navbar() {
    
    if(window.location.pathname === '/authentication') {
        return null
    }

    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/authentication'
    }

  return (
    <div className='abosulte w-full top-0 px-5 py-2 bg-gradient-to-b from-cyan-300 to-cyan-200  border-b-2 border-black '>
        <div className='flex justify-between items-center p-5 '>
            <div className='text-2xl font-bold'>User Management System</div>
            <PiSignOutBold size={30} onClick={()=>logout()}/>
        </div>
    </div>
  )
}

export default Navbar