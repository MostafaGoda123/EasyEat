import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import HeadLines from '../components/HeadLines'
import { FaUser } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { ImBookmark } from 'react-icons/im'

const Contact = () => {
   return (
      <div>
         <BreadCrumb page={'Contact'} />
         <HeadLines subTitle={"Shop by category"} title={"Send Us Message"} />
         <form className="my-8 py-10 px-5 bg-neutral-800 rounded-2xl flex flex-col gap-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="relative">
                  <input type="text" placeholder='your name' className='w-full h-full rounded-2xl border-2 border-white outline-none bg-transparent p-3' />
                  <FaUser className='absolute right-4 top-1/2 translate-y-[-50%] text-red-600' />
               </div>{/* name */}
               <div className="relative">
                  <input type="tel" placeholder='01** **** ***' className='w-full h-full rounded-2xl border-2 border-white outline-none bg-transparent p-3' />
                  <IoCall className='absolute right-4 top-1/2 translate-y-[-50%] text-red-600' />
               </div>{/* number */}
               <div className="relative">
                  <input type="text" placeholder='subject' className='w-full h-full rounded-2xl border-2 border-white outline-none bg-transparent p-3' />
                  <ImBookmark className='absolute right-4 top-1/2 translate-y-[-50%] text-red-600' />
               </div>{/* subject */}
            </div>
            <textarea className='w-full min-h-48 rounded-2xl border-2 border-white outline-none bg-transparent p-3' placeholder='Message'></textarea>
            <button type='submit' className='w-fit rounded-2xl border-2 border-white bg-transparent px-10 py-3'>Send Message</button>
         </form>
      </div>
   )
}

export default Contact
