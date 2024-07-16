import React, { useState } from 'react'
import FilterImage from '../images/FilterCategoryItem.png'
import { FaCheck } from 'react-icons/fa6'

const FilterCategoryItem = () => {
   const [active, setActive] = useState(false)
   return (
      <div className='mx-auto flex flex-col gap-5 w-48 cursor-pointer relative' onClick={()=>setActive(!active)}>
         <div className={`image w-48 h-48 border-4 ${active ? "border-red-600" : "border-white"} rounded-full overflow-hidden p-1`}>
            <img src={FilterImage} className='w-full h-full rounded-full' alt="" />
         </div>
         <p className="text-center">Vegetarian</p>
         {active && <FaCheck className='absolute right-3 top-3 p-1 text-white text-3xl bg-red-600 rounded-full' /> }
      </div>
   )
}

export default FilterCategoryItem
