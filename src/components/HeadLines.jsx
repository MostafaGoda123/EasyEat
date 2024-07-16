import React from 'react'

const HeadLines = ({title , subTitle}) => {
   return (
      <div className='flex justify-center items-center flex-col gap-1 mt-12 mb-12'>
         <p className=''>{subTitle}</p>
         <h3 className='fontDyna text-4xl'>{title}</h3>
      </div>
   )
}

export default HeadLines
