import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className=' bg-gray-800 text-white py-4 px-5 flex flex-col items-center w-full gap-5'>
        <div className='flex items-center gap-4 md:flex-row flex-col'>
            <div className='w-full  lg:w-1/4'>
                {/* //social media icons */}
                <h1 className='text-center text-xl font-semibold'>Follow us on:</h1>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <a href="https://www.instagram.com/the.lakshya.jangid/" className='flex justify-center items-center gap-2'>  <FaInstagram className='cursor-pointer' size={24}/> Instagram </a>
                    <a href="#" className='flex justify-center items-center gap-2'>  <FaFacebook className='cursor-pointer' size={24}/> Facebook </a>
                    <a href="#" className='flex justify-center items-center gap-2'>  <FaTwitter className='cursor-pointer' size={24}/> Twitter</a>
                    <a href="https://www.bing.com/ck/a?!&&p=8ca4a6029b38f1628dae0b58db868e4566c203ab9dcccdf41b409dec2f1bd4e6JmltdHM9MTc0MzIwNjQwMA&ptn=3&ver=2&hsh=4&fclid=1e527f80-3a37-63c1-13cb-6af13ba66202&psq=lakshya+jangid+iiitv&u=a1aHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vaW4vbGFrc2h5YS1qYW5naWQtMDU2MjUwMmEy&ntb=1" className='flex justify-center items-center gap-2'>  <FaLinkedin className='cursor-pointer' size={24}/> LinkedIN</a>
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