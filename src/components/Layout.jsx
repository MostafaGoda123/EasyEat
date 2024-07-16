import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
   return (
      <main className='container mx-auto'>
         <Navbar />
         <Outlet />
         <Footer />
      </main>
   )
}

export default Layout
