import axios from 'axios'
import React, { useState } from 'react'
import { useData } from '../Context/AppContext'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { FaCheck } from "react-icons/fa6";
import { TbLockPassword } from 'react-icons/tb';

function Authentication() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate } = useData()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form Submitted')
    const data = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`, data)
      if (response.status === 200) {
        const token = response.data.token
        localStorage.setItem('token', token)
        navigate('/');
      }
      console.log('Login successful:', response.data)
    } catch (error) {
      alert('Invalid credentials. Please try again.')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-cyan-400 to-light-blue-500'>
      <div className='hidden w-96 bg-gray-100 p-5 rounded-3xl shadow-2xl h-96
        sm:flex flex-col justify-evenly items-center'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <div>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
              <label className="flex items-center text-gray-600 mb-1"><AiOutlineMail className="mr-2" /> Email</label>
              <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your Email' required
                className="placeholder:text-gray-500 outline-none mb-4 w-full px-4 py-2 border rounded-lg " />
            </div>
            <div>
              <label className="flex items-center text-gray-600 mb-1"><TbLockPassword className="mr-2" /> Password</label>
              <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your password' required
                className="placeholder:text-gray-500 outline-none mb-4 w-full px-4 py-2 border rounded-lg " />
            </div>
            <button type='submit' className='w-full bg-cyan-400 rounded py-2 font-semibold text-gray-700 flex justify-center items-center gap-2'><FaCheck /> Submit </button>
          </form>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col py-10 gap-10 items-center justify-center w-full sm:hidden rounded-lg px-10 bg-gradient-to-r from-cyan-400 to-light-blue-500">
        <h1 className="text-3xl font-bold">Login</h1>
        <div className="w-full">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" className="placeholder:text-gray-500 outline-none w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"
                className="placeholder:text-gray-500 outline-none w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <button type="submit" className="w-full bg-cyan-400 rounded py-2 font-semibold text-gray-700 flex justify-center items-center gap-2">
                <FaCheck /> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Authentication