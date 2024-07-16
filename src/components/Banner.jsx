import React from 'react'

const Banner = () => {
   return (
      <div
         className='banner flex justify-center items-center flex-col gap-8 text-center'>
         <h1 className='fontDyna text-5xl'>Crafting your Exceptional<br/>Dining Reservations</h1>
         <p className='sm:w-2/4 sm:px-0 px-5'>Reservation is a step into a world of gastronomic wonder. Reserve your table today and let us paint your culinary dreams into reality.</p>
         <button className='btn '>Explore Products</button>
      </div>
   )
}

export default Banner
