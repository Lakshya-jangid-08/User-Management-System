import React, { useEffect } from 'react'
import { PiSignOutBold } from "react-icons/pi";

function Navbar() {

    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/authentication'
    }

  return (
    <div className='abosulte w-full h-fit top-0 bg-gradient-to-b from-cyan-300 to-cyan-200  border-b-2 border-black '>
        <div className='flex justify-between items-center px-3 sm:px-5 md:px-8 py-2 sm:py-4 md:py-6'>
            <div className='text-lg sm:text-xl md:text-2xl font-bold'>User Management System</div>
            <div className='flex items-center gap-5'>
              <h1 className='font-semibold text-base sm:text-lg md:text-xl'>Signout</h1>
              <PiSignOutBold className='text-lg sm:text-xl md:text-2xl lg:text-3xl' onClick={()=>logout()}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar