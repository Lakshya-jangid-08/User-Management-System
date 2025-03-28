import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className=' bg-gray-800 text-white py-4 px-5 flex flex-col items-center w-full gap-5'>
        <div className='flex items-center gap-4'>
            <div className='w-1/4'>
                {/* //social media icons */}
                <h1 className='text-center text-xl font-semibold'>Follow us on:</h1>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <a href="" className='flex justify-center items-center gap-2'>  <FaInstagram className='cursor-pointer' size={24}/> Instagram </a>
                    <a href="" className='flex justify-center items-center gap-2'>  <FaFacebook className='cursor-pointer' size={24}/> Facebook </a>
                    <a href="" className='flex justify-center items-center gap-2'>  <FaTwitter className='cursor-pointer' size={24}/> Twitter</a>
                    <a href="" className='flex justify-center items-center gap-2'>  <FaLinkedin className='cursor-pointer' size={24}/> LinkedIN</a>
                 </div>
            </div>
            <div className='w-3/4'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga perferendis necessitatibus corporis, quae vitae suscipit alias animi distinctio expedita incidunt pariatur a id quasi unde placeat est obcaecati reprehenderit vero.</h1>
            </div>
        </div>
        <div>
            <h1 className='text-center text-sm'>© 2025 All rights reserved.</h1>
        </div>
    </footer>
  )
}

export default Footer