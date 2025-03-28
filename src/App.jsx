import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from './Pages/Authentication'
import UserList from './Pages/UserList'
import Navbar from './Components/Navbar'
import EditUser from './Pages/EditUser'

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/authentication' element={< Authentication />} />
        <Route path='/user-list/page/:id' element={< UserList />} />
        <Route path='/edit-user/:id' element={< EditUser />} />
    </Routes>
    </>
  )
}

export default App