import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({page}) => {
   return (
      <div className='breadCrumb w-full h-96 rounded-2xl mt-5 flex justify-center items-center'> 
         <h1 className='text-3xl'><Link to={'/'}>Home</Link> - <span className='opacity-50'>{page}</span></h1>
      </div>
   )
}

export default BreadCrumb
