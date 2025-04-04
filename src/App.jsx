import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Authentication from './Pages/Authentication'
import UserList from './Pages/UserList'
import Navbar from './Components/Navbar'
import EditUser from './Pages/EditUser'
import HomePage from './Pages/Home'

function App() {
  const location = useLocation()
  return (
    <>
    {location.pathname !== '/authentication' && <Navbar />}
    <Routes>
        <Route path='/authentication' element={< Authentication />} />
        <Route path='/user-list/page/:pageId' element={< UserList />} />
        <Route path='/' element={< HomePage />} />
        <Route path='/edit-user/:id' element={< EditUser />} />
    </Routes>
    </>
  )
}

export default App