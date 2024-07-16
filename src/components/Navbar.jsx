import React, { useContext, useState } from 'react'
import { FaBars, FaHeart } from 'react-icons/fa'
import { FaCartShopping, FaXmark } from 'react-icons/fa6'
import {  NavLink, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'
import { MobileHandlerContext} from '../context/MobileHandler'
import { motion } from 'framer-motion'

const Navbar = () => {
   let { isMobile } = useContext(MobileHandlerContext)
   const [openMenu, setOpenMenu] = useState(false)
   let location = useLocation().pathname;
   return (
      <nav className='z-50 absolute top-8 left-0 w-full flex justify-between items-center' style={{padding : '0 10%'}}>
         <img src={logo} alt="" />
         {isMobile ? 
            <>
               <FaBars onClick={()=>setOpenMenu(true)} className='text-3xl'/>
               {openMenu&&
               <motion.div 
                  initial={{opacity : 0 , x : -300 , y : -600}}
                  whileInView={{opacity : 1 , x : 0 , y : 0}}
                  transition={{duration : 0.4}}
                  className='p-5 fixed top-0 left-0 h-full w-full bg-[#2d2d2d] ' style={{padding:'0 8%'}}>
               <div className='flex justify-between items-center py-5'>
                  <img src={logo} alt="" />
                  <FaXmark onClick={()=>setOpenMenu(false)} className='text-3xl text-white cursor-pointer duration-300 hover:text-red-700 ' />
               </div>
               <ul className='flex flex-col justify-center items-center h-96 mt-28 text-2xl gap-8'>
                  <NavLink className={`hover:opacity-100 ${location==='/'? "opacity-100" : "opacity-50"}`} to={'/'}>Home</NavLink>
                  <NavLink className={`hover:opacity-100 ${location==='/about'? "opacity-100" : "opacity-50"}`} to={'/about'}>About</NavLink>
                  <NavLink className={`hover:opacity-100 ${location==='/shop'? "opacity-100" : "opacity-50"}`} to={'/shop'}>Shop</NavLink>
                  <NavLink className={`hover:opacity-100 ${location==='/contact'? "opacity-100" : "opacity-50"}`} to={'/contact'}>Contact</NavLink>
               </ul>
               </motion.div>}
            </>
         :
            <>
            <ul className='flex gap-8'>
               <NavLink className={`hover:opacity-100 ${location==='/'? "opacity-100" : "opacity-50"}`} to={'/'}>Home</NavLink>
               <NavLink className={`hover:opacity-100 ${location==='/about'? "opacity-100" : "opacity-50"}`} to={'/about'}>About</NavLink>
               <NavLink className={`hover:opacity-100 ${location==='/shop'? "opacity-100" : "opacity-50"}`} to={'/shop'}>Shop</NavLink>
               <NavLink className={`hover:opacity-100 ${location==='/contact'? "opacity-100" : "opacity-50"}`} to={'/contact'}>Contact</NavLink>
               </ul>
            <div className='flex gap-4'>
               <div className="w-9 h-9 flex justify-center items-center rounded-full text-xl border cursor-pointer border-white relative hover:bg-red-700 duration-300">
                  <FaHeart />
                  <span className='absolute top-[-5px] right-[-5px] bg-red-600 rounded-full p-1 h-5 w-5 flex justify-center items-center text-sm'>0</span> 
               </div>
               <div className="w-9 h-9 flex justify-center items-center rounded-full text-xl border cursor-pointer border-white relative hover:bg-red-700 duration-300">
                  <FaCartShopping />
                  <span className='absolute top-[-5px] right-[-5px] bg-red-600 rounded-full p-1 h-5 w-5 flex justify-center items-center text-sm'>0</span> 
               </div>
            </div>
            </>
         }
         
      </nav>
   )
}

export default Navbar
