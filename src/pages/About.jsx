import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

const About = () => {
   return (
      <div>
         <BreadCrumb page={'About'} />
         <div className="py-10 text-center px-5 text-2xl sm:w-1/2 w-full mx-auto leading-10 font-light">
            Hello to <span className="fontDyna text-red-600">EasyEat</span> restaurant. We have the best delivery team. we will be very fast in responding your request.
         </div>
      </div>
   )
}

export default About
