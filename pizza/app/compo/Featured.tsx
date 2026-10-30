import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'
const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPER */}
      <div className='w-max flex'>
        {/* SINGLE WRAPER */}
 { 
 featuredProducts.map(item=>(


 <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300
 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
          {/* IMAGE CON */}
          {item.img && (
            <div className='relative flex-1 w-full hover:rotate-360 transition-all duration-400'>
            <Image src={item.img} alt='' fill className='object-contain' />
          </div>)}
          {/* text CON */}
          <div className='flex-1 flex flex-col items-center text-center gap-4 justify-center'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
            <p className='p-4
             "'>{item.desc}</p>

            <span className='text-xl font-bold'>${item.price}</span>
            <button className='bg-red-600 text-white p-2 rounded-md'>Add to cart</button>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Featured