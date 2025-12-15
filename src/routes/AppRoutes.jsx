import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Home from '../pages/Home'

const AppRoutes = () => {
  const [role, setRole] = useState('grower')

  return (
    <BrowserRouter>
        <Navbar role={role} setRole={setRole} />
        <Routes>
            <Route path='/' element={<Home role={role} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes