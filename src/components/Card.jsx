import React from 'react'
import cardImg from '../images/card.png'
import { FaStar } from 'react-icons/fa'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const Card = () => {
   return (
      <div className='p-2 bg-[#1d1d1d] rounded-xl flex flex-col gap-3'>
         <img src={cardImg} alt="" className='w-full rounded-xl' />
         <div className="flex justify-between items-center">
            <span className="text-red-600">150 EG</span>
            <span className="flex gap-1 items-center"><FaStar className='text-yellow-400' /> 4.5</span>
         </div>
         <hr />
         <p className='text-sm'>Pork Chop with Apple Chutney</p>
         <div>
            <div className='flex gap-2 items-center text-sm text-gray-400 mb-1'><IoIosCheckmarkCircleOutline className='text-2xl text-red-600' />4 Pieces</div>
            <div className='flex gap-2 items-center text-sm text-gray-400'><IoIosCheckmarkCircleOutline className='text-2xl text-red-600' />Spicy Sauce</div>
         </div>
         <button className="w-full py-3 border border-white rounded-3xl hover:border-red-600 hover:text-red-600 duration-300">Add to cart</button>
      </div>
   )
}

export default Card
