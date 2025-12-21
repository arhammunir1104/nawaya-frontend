import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Home from '../pages/Home'
import Exclusive from '../pages/Exclusive'
import Admin from '../pages/Admin'
import Footer from '../components/Footer'
import UserDashboard from '../pages/UserDashboard'
import Login from '../pages/Login'

import { ToastContainer } from 'react-toastify';
import AdminLogin from '../pages/AdminLogin'
import Guide from '../pages/Guide/Guide'
import Grower from '../pages/Grower/Grower'
import Thankyou from '../pages/Thankyou'

const AppRoutes = () => {
  const [role, setRole] = useState('grower')

  return (
    <BrowserRouter>
        <Navbar role={role} setRole={setRole} />
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Grower role={role} />} />
            <Route path='/guide' element={<Guide role={role} />} />
            <Route path='/exclusive' element={<Exclusive role={role} />} />
            <Route path='/admin/dashboard' element={<Admin />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/user' element={<UserDashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/thankyou' element={<Thankyou />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes