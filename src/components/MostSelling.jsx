import React from 'react'
import HeadLines from './HeadLines'
import Card from './Card';
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation, Scrollbar } from 'swiper/modules';

const MostSelling = () => {
   return (
      <div className='py-8'>
         <HeadLines subTitle={"Most Selling"} title={"Most Selling"} />
         <Swiper
            slidesPerView={4.3}
            spaceBetween={25}
            modules={[Navigation , Scrollbar]}
            navigation={{ nextEl:".arrowRight" , prevEl:".arrowLeft" }}
            scrollbar={{ el : ".swiperProgress" }}
            breakpoints= {{
               320: {
                  slidesPerView: 1.3,
                  spaceBetween: 20
               },
               480: {
                  slidesPerView: 2.3,
                  spaceBetween: 20
               },
               640: {
                  slidesPerView: 3.3,
                  spaceBetween: 20
               },
               1000: {
                  slidesPerView: 4.3,
                  spaceBetween: 20
               }
            }}
         >
            {[1,2,3,4,5,6,7,8,9].map(e => <SwiperSlide key={e}><Card /></SwiperSlide>)}
         </Swiper>
         <div className="flex gap-5 items-center mt-5">
            <div className="swiperProgress flex-1 rounded-xl h-1 bg-[#333]"></div>
            <div className=" flex gap-3">
               <FaArrowLeft  className='arrowLeft  p-2 h-10 w-10 rounded-full cursor-pointer hover:bg-red-600 duration-300 border-2 border-white' />
               <FaArrowRight className='arrowRight p-2 h-10 w-10 rounded-full cursor-pointer hover:bg-red-600 duration-300 border-2 border-white' />
            </div>
         </div>
      </div>
   )
}

export default MostSelling
