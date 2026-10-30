import React from 'react'
import Image from 'next/image'
export const Cartpage = () => {
  return (
    <div className='h-[clac(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500  lg:flex-row '>
      {/* product */}
<div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
  {/* one item */}
  <div className='flex items-center justify-between mb-4 '>
    <Image src="/temporary/p1.png" alt='+' width={100} height={100}/>
    <div className="">
      <h1 className='uppercase text-xl font-bold'>sicilian</h1>
      <span>Large</span>
    </div>
    <h2 className='font-bold'>$79.19</h2>
    <span className='cursor-pointer'>X</span>
  </div>
  {/* one item */}
  <div className='flex items-center justify-between mb-4 '>
    <Image src="/temporary/p1.png" alt='+' width={100} height={100}/>
    <div className="">
      <h1 className='uppercase text-xl font-bold'>sicilian</h1>
      <span>Large</span>
    </div>
    <h2 className='font-bold'>$79.19</h2>
    <span className='cursor-pointer'>X</span>
  </div>
  {/* one item */}
  <div className='flex items-center justify-between mb-4 '>
    <Image src="/temporary/p1.png" alt='+' width={100} height={100}/>
    <div className="">
      <h1 className='uppercase text-xl font-bold'>sicilian</h1>
      <span>Large</span>
    </div>
    <h2 className='font-bold'>$79.19</h2>
    <span className='cursor-pointer'>X</span>
  </div>
</div>
      {/* payment */}
      <div className='h-1/2 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className="flex justify-between ">
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.29</span>
        </div>
         <div className="flex justify-between ">
          <span className=''>service cost</span>
          <span className=''>$0.00</span>
        </div>
         <div className="flex justify-between ">
          <span className=''>delivery cost</span>
          <span className='text-green-500'>free</span>
        </div>

        
        <hr className='my-2'/>
          <div className="flex justify-between ">
          <span className=''>Total (INCL. VAT)</span>
          <span className='font-bold'>$102.21</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>Checkout</button>
      </div>
    </div>
  )
}
export default Cartpage