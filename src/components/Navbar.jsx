import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiFillTag, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillSaveFill } from 'react-icons/bs'
import { FaShoppingCart, FaUserFriends, FaWallet } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <nav className='container mx-auto h-[10vh] flex items-center justify-between'>
         <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-2xl">
               <AiOutlineMenu className='cursor-pointer' onClick={()=>setOpenMenu(true)} />
               <h1>Best <span className="font-bold">Eats</span></h1>
            </div>
            <div className='bg-neutral-200 rounded-3xl sm:flex hidden items-center'>
               <p className='px-3 py-1 text-white rounded-3xl bg-black'>Delivery</p>
               <p className='px-3 py-1'>Pickup</p>
            </div>
         </div>
         <div className="inp relative lg:w-96 md:w-60 sm:w-40 h-8 rounded-3xl bg-neutral-200">
            <AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-2' />
            <input type="text" placeholder='Search focus ...' className='w-full h-full ps-8 pe-2 bg-transparent outline-none border-none' />
         </div>
         <button className="flex gap-2 items-center bg-black text-white"><FaShoppingCart />Cart</button>
         {openMenu && 
         <section className='duration-300 fixed left-0 top-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)] z-50'>
            <motion.ul className='bg-white h-full w-52 p-5 flex flex-col gap-5'
            initial={{x:'-100%',y:-200}}
            whileInView={{x:0 , y:0 ,transitionDuration:5000}}>
               <li className='flex justify-between'><span>Best <span className="font-semibold">Eats</span></span><IoClose onClick={()=>setOpenMenu(false)} className='text-3xl cursor-pointer bg-neutral-200 rounded-full p-1 hover:bg-red-600 hover:text-white duration-300' /></li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><TbTruckDelivery className='w-8' />Orders</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><MdFavorite className='w-8' />Favorite</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><FaWallet className='w-8' />Wallet</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><MdHelp className='w-8' />Help</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><AiFillTag className='w-8' />Promotions</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><BsFillSaveFill className='w-8' />Best Ones</li>
               <li className='flex gap-2 cursor-pointer items-center text-xl' onClick={()=>setOpenMenu(false)}><FaUserFriends className='w-8' />Invite Friends</li>
            </motion.ul>
         </section>}
      </nav>
   )
}

export default Navbar
